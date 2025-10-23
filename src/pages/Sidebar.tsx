import React from 'react';
import { Search, Clock, Sun, Moon, Sunset, Sunrise } from 'lucide-react';

const Sidebar = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff', borderRight: '1px solid #e5e5e5', height: '100vh', overflowY: 'auto' }}>
      
      {/* Filters Header */}
      <div style={{ padding: '16px', borderBottom: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', margin: '0' }}>Filters</h3>
        <button style={{ color: '#3b82f6', fontSize: '18px', background: 'none', border: 'none', cursor: 'pointer' }}>CLEAR ALL</button>
      </div>

      {/* AC Filter */}
      <div style={{ padding: '16px', borderBottom: '1px solid #e5e5e5' }}>
        <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#1f2937', marginBottom: '12px' }}>AC</h4>
        <div style={{ display: 'flex', gap: '16px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>AC</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Non-AC</span>
          </label>
        </div>
      </div>

      {/* Seat Type */}
      <div style={{ padding: '16px', borderBottom: '1px solid #e5e5e5' }}>
        <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#1f2937', marginBottom: '12px' }}>Seat type</h4>
        <div style={{ display: 'flex', gap: '16px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Seater</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Sleeper</span>
          </label>
        </div>
      </div>

      {/* Single Seater/Sleeper */}
      <div style={{ padding: '16px', borderBottom: '1px solid #e5e5e5' }}>
        <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#1f2937', marginBottom: '12px' }}>Single Seater/Sleeper</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Search size={18} color="#6b7280" />
          <span style={{ fontSize: '18px', color: '#6b7280' }}>Single Seats</span>
        </div>
        <p style={{ fontSize: '18px', color: '#9ca3af', margin: '0 0 12px 0' }}>Guarantee on check-in/check-outs</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Majority</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Aravali Red Circle</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Majority</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Mayurala</span>
          </label>
        </div>
        <button style={{ color: '#3b82f6', fontSize: '18px', background: 'none', border: 'none', cursor: 'pointer', marginTop: '8px' }}>Show all (221)</button>
      </div>

      {/* Pick up point */}
      <div style={{ padding: '16px', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#1f2937', margin: '0' }}>Pick up point - Bangalore, Karnataka</h4>
          <button style={{ color: '#9ca3af', fontSize: '18px', background: 'none', border: 'none', cursor: 'pointer' }}>CLEAR</button>
        </div>

        <div style={{ position: 'relative', marginBottom: '12px' }}>
          <input 
            type="text" 
            placeholder="Search" 
            style={{ 
              width: '100%', 
              padding: '8px 32px 8px 12px', 
              border: '1px solid #d1d5db', 
              borderRadius: '4px', 
              fontSize: '18px',
              outline: 'none'
            }} 
          />
          <Search size={18} color="#9ca3af" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Majestic (Kempegowda Bus Station)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Aravali Red Circle</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Majority</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Mayurala</span>
          </label>
        </div>

        {/* Pick up time */}
        <div style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '22px', fontWeight: '600', color: '#1f2937' }}>Pick up time - Bangalore, Karnataka</span>
            <button style={{ color: '#9ca3af', fontSize: '18px', background: 'none', border: 'none', cursor: 'pointer' }}>CLEAR</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[{icon: Moon, label: '12 AM - 6 AM'}, {icon: Sunrise, label: '6 AM - 12 PM'}, {icon: Sun, label: '12 PM - 6 PM'}, {icon: Sunset, label: '6 PM - 12 AM'}].map((time, idx) => {
              const Icon = time.icon;
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px', border: '1px solid #e5e5e5', borderRadius: '4px', cursor: 'pointer' }}>
                  <Icon size={18} color="#4b5563" style={{ marginBottom: '4px' }} />
                  <span style={{ fontSize: '18px', color: '#4b5563', textAlign: 'center' }}>{time.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Operators */}
      <div style={{ padding: '16px', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#1f2937', margin: '0' }}>Operators</h4>
          <button style={{ color: '#9ca3af', fontSize: '18px', background: 'none', border: 'none', cursor: 'pointer' }}>CLEAR</button>
        </div>
        
        <div style={{ position: 'relative', marginBottom: '12px' }}>
          <input 
            type="text" 
            placeholder="Search" 
            style={{ 
              width: '100%', 
              padding: '8px 32px 8px 12px', 
              border: '1px solid #d1d5db', 
              borderRadius: '4px', 
              fontSize: '18px',
              outline: 'none'
            }} 
          />
          <Search size={18} color="#9ca3af" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Yolo Bus</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>NuGo</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>Multi Travels</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <span style={{ fontSize: '18px', color: '#4b5563' }}>FRESHBUS</span>
          </label>
        </div>
        <button style={{ color: '#3b82f6', fontSize: '18px', background: 'none', border: 'none', cursor: 'pointer', marginTop: '8px' }}>Show all (107)</button>
      </div>

      {/* Drop point */}
      <div style={{ padding: '16px', marginBottom: '72px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px', border: '1px solid #e5e5e5', borderRadius: '4px', cursor: 'pointer' }}>
            <Moon size={20} color="#4b5563" style={{ marginBottom: '6px' }} />
            <span style={{ fontSize: '18px', color: '#4b5563', textAlign: 'center' }}>12 AM - 6 AM</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px', border: '1px solid #e5e5e5', borderRadius: '4px', cursor: 'pointer' }}>
            <Sunrise size={20} color="#4b5563" style={{ marginBottom: '6px' }} />
            <span style={{ fontSize: '18px', color: '#4b5563', textAlign: 'center' }}>6 AM - 12 PM</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px', border: '1px solid #e5e5e5', borderRadius: '4px', cursor: 'pointer' }}>
            <Sun size={20} color="#4b5563" style={{ marginBottom: '6px' }} />
            <span style={{ fontSize: '18px', color: '#4b5563', textAlign: 'center' }}>12 PM - 6 PM</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px', border: '1px solid #e5e5e5', borderRadius: '4px', cursor: 'pointer' }}>
            <Sunset size={20} color="#4b5563" style={{ marginBottom: '6px' }} />
            <span style={{ fontSize: '18px', color: '#4b5563', textAlign: 'center' }}>6 PM - 12 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
