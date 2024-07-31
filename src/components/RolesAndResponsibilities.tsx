import React from 'react';

const CommitteeChairInfo = () => {
  return (
    <div id="rolesresp" className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-3xl font-extrabold text-red-600 mb-8 text-center">
            Roles and Responsibilities
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Term and Rotation
            </h2>
            <p className="text-lg text-gray-500">
              The Committee Chair will have a 2-year term. The Chair will rotate
              from Province to province every two years. It will start with
              Newfoundland and Labrador, then New Brunswick, PEI, and Nova
              Scotia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Responsibilities
            </h2>
            <ul className="list-disc text-left text-lg text-gray-500">
              <li>Calling the meetings</li>
              <li>Setting the meeting agenda</li>
              <li>Sending notice to committee members</li>
              <li>Chairing the meetings and recording minutes</li>
              <li>
                Ensuring the purpose/deliverables of the committee are achieved
              </li>
              <li>
                The Chair will use their own administrative support to help
                organize meetings and write minutes (exception PEI).
              </li>
              <li>
                In the future, consideration will be made for an AERO email
                address for communication / social media connection.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Committee Members
            </h2>
            <p className="text-lg text-gray-500">
              All Committee Members are responsible for contributing to the
              committee work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Meetings
            </h2>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Virtual Meetings
            </h3>
            <p className="text-lg text-gray-500">
              A. Virtual meetings will be called quarterly at the discretion of
              the Chair of the Committee.
            </p>
            <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">
              Research Colleagues
            </h3>
            <p className="text-lg text-gray-500">
              B. Members may invite research colleagues to attend and present at
              AERO Meetings where their involvement in a project is pertinent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Reporting / Communication
            </h2>
            <ul className="list-disc text-left ml-6 text-lg text-gray-500">
              <li>Minutes will be distributed after each meeting</li>
              <li>
                A slack channel for AERO will be used as a form of ongoing
                communication
              </li>
              <li>Dropbox folder will be used to maintain records for AERO</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Decision Making
            </h2>
            <ul className="list-disc text-left ml-6 text-lg text-gray-500">
              <li>
                At least 50% of members must agree for a decision to move
                forward.
              </li>
              <li>
                Minutes must be approved by two members; this can be done in
                person or virtually
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Member Expectations
            </h2>
            <p className="text-lg text-gray-500">
              Members will attend a minimum of 50% of the meetings per year. We
              will aim to meet 4-6 times for 1-hour per calendar year.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommitteeChairInfo;
