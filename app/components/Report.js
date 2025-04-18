"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { FaRegHandPointRight } from "react-icons/fa6";
import ReportPop from "./ReportPop";
import ClaimPop from "./ClaimPop";

const Report = ({title}) => {
  const [pop, setPop] = useState({ report: false, claim: false });

  const handelPop = () => {
    setPop({report:true});
  };

  const claimPopHandel = () => {
    setPop({claim:true})
  }

  return (
    <div className=" flex justify-between  text-xs pt-1">
      <div
        onClick={handelPop}
        className="flex items-center relative cursor-pointer right-2 gap-1 ml-4 text-red-600"
      >
        <RxCross2 className="bg-red-600  text-white" />
        <p>Report</p>
      </div>

      <div onClick={claimPopHandel}
       className="flex items-center gap-[2px] cursor-pointer mr-1">
        <FaRegHandPointRight className="text-sm text-blue-600" />
        <p>Claim the Business</p>
      </div>
      <ReportPop
        title={title}
        isOpen={pop.report}
        isClose={() => setPop({ ...pop, report: false })}
      />

    <ClaimPop
        title={title}
        isOpen={pop.claim}
        isClose={() => setPop({ ...pop, claim: false })}
      />
    </div>
  );
};

export default Report;
