import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#ff0000] mb-4">
            Terms and Conditions
          </h1>
          <div className="w-24 h-1 bg-policy-accent mx-auto rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="bg-card rounded-lg p-8 space-y-8">
          {/* Introduction */}
          <section className="bg-policy-section p-6 rounded-lg">
            <p className="text-policy-text leading-relaxed text-lg">
              By accessing or using this website, you agree to be bound by
              these Terms and Conditions. Please read them carefully before
              using our site. If you do not agree with any part of these
              terms, you must not use this website.
            </p>
          </section>

          {/* Use of the Website */}
          <section>
            <h2 className="text-2xl font-semibold text-[#ff0000] mb-4">
              Use of the Website
            </h2>
            <p className="text-policy-text leading-relaxed mb-4">
              You agree to use this website only for lawful purposes and in a
              way that does not infringe the rights of, restrict, or inhibit
              anyone else's use and enjoyment of the website.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-[#ff0000] mb-4">
              Intellectual Property
            </h2>
            <p className="text-policy-text leading-relaxed mb-4">
              All content, logos, graphics, and other materials on this website
              are the property of the website owner and are protected by
              applicable intellectual property laws. You may not copy, modify,
              distribute, or reproduce any material without explicit permission.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-[#ff0000] mb-4">
              User Responsibilities
            </h2>
            <ul className="list-disc list-inside text-policy-text space-y-2 ml-4">
              <li>You must provide accurate information when using the site.</li>
              <li>You must not attempt to access unauthorized areas of the site.</li>
              <li>You must not upload any harmful or illegal content.</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-[#ff0000] mb-4">
              Limitation of Liability
            </h2>
            <p className="text-policy-text leading-relaxed mb-4">
              We are not responsible for any direct, indirect, incidental, or
              consequential damages that may arise from the use of or inability
              to use this website.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-[#ff0000] mb-4">
              Governing Law
            </h2>
            <p className="text-policy-text leading-relaxed mb-4">
              These terms are governed by and construed in accordance with the
              laws of India. Any disputes arising in connection with these terms
              shall be subject to the exclusive jurisdiction of the courts in
              India.
            </p>
          </section>

          {/* Third-party Links */}
          <section>
            <h2 className="text-2xl font-semibold text-[#ff0000] mb-4">
              Third-party Links
            </h2>
            <p className="text-policy-text leading-relaxed mb-4">
              This website may contain links to third-party websites. We are
              not responsible for the content, privacy policies, or practices of
              these external sites.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-[#ff0000] mb-4">
              Changes to Terms
            </h2>
            <p className="text-policy-text leading-relaxed mb-4">
              We reserve the right to modify these Terms and Conditions at any
              time. Updates will be posted on this page, and your continued use
              of the website constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Contacting Us */}
          <section className="bg-policy-section p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#ff0000] mb-4">
              Contacting Us
            </h2>
            <p className="text-policy-text leading-relaxed">
              If you have any questions regarding these Terms and Conditions,
              you may contact us using the information below:
            </p>
            <div className="mt-4 p-4 bg-card rounded border-l-4 border-policy-accent">
              <p className="text-policy-text font-medium">sanchar6t@gmail.com</p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-semibold text-[#ff0000] mb-4">
              Disclaimer
            </h2>
            <p className="text-policy-text leading-relaxed">
              These Terms and Conditions are provided to ensure a clear
              understanding of your use of the website. Please read them
              carefully. By using this website, you acknowledge that you have
              read and understood these terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
