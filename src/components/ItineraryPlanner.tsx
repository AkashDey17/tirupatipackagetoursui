import React, { useState } from "react";
import { MapPin, Clock, Bed, Zap, RefreshCw } from "lucide-react";
import toast, { Toaster } from "react-hot-toast"; // ✅ Import react-hot-toast

const TOUR_OPTIONS = [
  {
    id: "serenity",
    label:
      "Divine Blessings & Sacred Serenity – Tirupati & Srikalahasti in 2 Days 2 Nights"
  },
  {
    id: "templeTrails",
    label:
      "Discover Tirupati by Bus & Temple Trails – 2 Days 1 Night (Free Dharshan)"
  }
];

const API_BASE = "http://localhost:5000";

export default function ItineraryPlanner() {
  const [tourId, setTourId] = useState(TOUR_OPTIONS[0].id);
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);
  const [error, setError] = useState(null);

  async function generate() {
    if (!arrivalDate || !arrivalTime) {
      toast.error("Please select both Arrival Date and Time"); // ✅ Use toast for errors
      return; // prevent API call
    }

    // Show toast for selected package
    const packageLabel = TOUR_OPTIONS.find(o => o.id === tourId)?.label;
    toast(`Generating itinerary for "${packageLabel}"`); // ✅ Use toast for info

    setLoading(true);
    setError(null);
    setPlan(null);
    try {
      const res = await fetch(`${API_BASE}/api/plan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tourId, arrivalDate, arrivalTime, travelers })
      });
      const json = await res.json();
      if (!json.success) setError(json.error || "Unknown error");
      else setPlan(json.plan);
    } catch (err) {
      setError("Failed to contact server");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 font-sans relative">
      {/* React Hot Toast container */}
      <Toaster position="top-right" />

      {/* Header Card */}
      <div className="bg-gradient-to-r from-[#05386B] via-[#136F63] to-[#B2DBBF] rounded-3xl p-6 shadow-2xl text-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              AI-Powered Darshan Planner
            </h1>
            <p className="text-xl opacity-90 mt-2">
              Smart schedules, darshan slots, hotels, & activities at a glance.
            </p>
          </div>
          <div className="text-right mt-2 sm:mt-0">
            <div className="text-xl text-white/80">Powered by</div>
            <div className="mt-1 text-xl font-semibold">TechVaraha</div>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-xl font-semibold">Package</label>
            <select
              value={tourId}
              onChange={(e) => setTourId(e.target.value)}
              className="mt-1 w-full p-3 rounded-xl text-gray-800 shadow focus:ring-2 focus:ring-green-400"
            >
              {TOUR_OPTIONS.map((o) => (
                <option key={o.id} value={o.id}>{o.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xl font-semibold">Arrival</label>
            <div className="mt-1 flex flex-col sm:flex-row gap-2">
              <input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="p-3 rounded-xl w-full shadow text-gray-800 focus:ring-2 focus:ring-green-400"
              />
              <input
                type="time"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                className="p-3 rounded-xl sm:w-36 shadow text-gray-800 focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div>
            <label className="text-xl font-semibold">Travellers</label>
            <input
              type="number"
              min={1}
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
              className="mt-1 p-3 rounded-xl w-full shadow text-gray-800 focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={generate}
            disabled={loading}
            className="inline-flex items-center gap-2 bg-white text-[#0b3c2b] px-6 py-3 rounded-xl shadow-lg font-semibold hover:bg-green-50 transition"
          >
            {loading ? (
              <>
                <RefreshCw className="animate-spin" size={16} /> Generating...
              </>
            ) : (
              <>
                <Zap size={16} /> Generate Itinerary
              </>
            )}
          </button>
          <button
            onClick={() => { setPlan(null); setError(null); }}
            className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 rounded-xl text-white hover:bg-white hover:text-[#0b3c2b] transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 space-y-8">
        {error && (
          <div className="p-5 bg-red-50 text-red-700 rounded-xl shadow">{error}</div>
        )}

        {!plan && !error && (
          <div className="p-8 bg-white rounded-2xl text-xl shadow text-center text-gray-700">
            Choose a package and click <strong>Generate Itinerary</strong> to see AI suggestions.
          </div>
        )}

        {plan && (
          <div className="space-y-6">
            {/* Top Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Hotels */}
              <div className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition transform">
                <div className="flex items-center gap-3 mb-3">
                  <Bed size={20} /> <div className="font-semibold text-lg">Suggested Hotels</div>
                </div>
                <ul className="space-y-3">
                  {plan.hotels?.map((h, idx) => (
                    <li key={idx} className="flex gap-3 items-center border-l-4 border-green-400 pl-3 py-2 hover:bg-green-50 rounded-xl transition">
                      {h.imageUrl && <img src={h.imageUrl} className="w-20 h-20 rounded-xl object-cover shadow" />}
                      <div>
                        <div className="font-medium">{h.name}</div>
                        <div className="text-xl text-gray-500">{h.area} • {h.approxPriceRange}</div>
                        <div className="text-xl text-gray-600">{h.recommendedFor}</div>
                      </div>
                    </li>
                  )) || <li className="text-gray-500">No hotel suggestions</li>}
                </ul>
              </div>

              {/* Darshan Estimates */}
              <div className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition transform">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={20} /> <div className="font-semibold text-xl">Darshan Estimates</div>
                </div>
                <ul className="space-y-3">
                  {plan.darshanEstimates?.map((d, idx) => (
                    <li key={idx} className="flex gap-3 items-center border-l-4 border-yellow-400 pl-3 py-2 rounded-xl hover:bg-yellow-50 transition">
                      {d.imageUrl && <img src={d.imageUrl} className="w-20 h-20 rounded-xl object-cover shadow" />}
                      <div>
                        <div className="font-medium">{d.templeName}</div>
                        <div className="text-xl text-gray-500">Slot: {d.recommendedSlot} • Wait: {d.estimatedWaitMinutes} mins</div>
                        <div className="text-xl text-gray-600">{d.notes}</div>
                      </div>
                    </li>
                  )) || <li className="text-gray-500">No darshan info</li>}
                </ul>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition transform">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} /> <div className="font-semibold text-xl">Quick Info</div>
                </div>
                <div className="space-y-2 text-xl text-gray-700">
                  <div><strong>Arrival:</strong> {arrivalDate || "—"} {arrivalTime || ""}</div>
                  <div><strong>Travellers:</strong> {travelers}</div>
                  <div><strong>Package:</strong> {TOUR_OPTIONS.find(o => o.id === tourId).label}</div>
                </div>
              </div>
            </div>

            {/* Day-wise Plan */}
            <div className="space-y-4">
              {plan.days?.map((d, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition transform">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="text-xl text-gray-500">Day {d.dayNumber}  {d.date || ""}</div>
                      <div className="text-xl font-semibold mt-1">Activities</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {d.activities?.map((a, i2) => (
                      <div key={i2} className="flex flex-col sm:flex-row sm:items-start gap-4 p-3 rounded-xl hover:bg-green-50 transition">
                        {a.imageUrl && <img src={a.imageUrl} className="w-24 h-24 rounded-xl object-cover shadow" />}
                        <div className="flex-1">
                          <div className="font-medium text-lg">{a.title}</div>
                          <div className="text-xl text-gray-600">{a.location} • {a.estimatedDurationMinutes} mins</div>
                          <div className="text-xl text-gray-500 mt-1">{a.notes}</div>
                        </div>
                      </div>
                    )) || <div className="text-gray-500">No activities</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-xl text-gray-500 text-center">
        <strong>Note:</strong> Durations and waiting times are estimated. Always check official temple timings & ticket portals of Sanchar6T.
      </div>
    </div>
  );
}
