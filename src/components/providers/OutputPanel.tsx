"use client";

import { useCodeEditorStore } from "@/store/editorStore";
import { Loader2, Plus , Minus} from "lucide-react";
export default function OutputPanel() {
  const {customInput , setCustomInput , runCode , error , output , isRunning, fontSize, setFontSize} = useCodeEditorStore()
   
  function runCodeHandler(){
      runCode()
  }

  return (
    <div className="relative bg-[#12121a]/90 backdrop-blur rounded-xl border border-white/[0.05] p-6">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <div className="flex w-30 gap-3">
            <button className=" bg-blue-950 p-2 rounded-full" onClick={()=>{
              setFontSize(fontSize+1)
            }}>
            <Plus></Plus>
            </button>
            <button className="bg-blue-400 p-2 rounded-full" onClick={()=>{
              setFontSize(fontSize-1)
            }}><Minus></Minus></button>
            
            
          </div>
          <button
            onClick={runCodeHandler}
            className="px-4 py-2 w-32 gap-2 hover:bg-blue-900 flex item-center justify-center text-white rounded-md font-light transition-colors  bg-gradient-to-r from-blue-800 to-green-900"
          >
            {isRunning ?  <>
                <Loader2 className="animate-spin w-5 h-5" /> Running
              </> : "Run Code"}
          </button>
        </div>
        <div>
        <textarea
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={
          "focus:outline-none w-full border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-[#1e1e2f] mt-2 h-[130px] max-h-[130px]"}
      ></textarea>

        </div>

        <div>
          <div
            className={`w-full p-3 bg-[#1e1e2f] ${error ? "text-red-600 font-semibold font-sans":"text-white"} border border-white/[0.05] rounded-md min-h-[465px]`}
          >
            {error? error : output}
          </div>
        </div>
      </div>
    </div>
  );
}


