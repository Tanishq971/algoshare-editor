// eslint-disable-next-line @typescript-eslint/no-explicit-any

import { create } from "zustand";
import { CodeEditorState } from "@/types";
import { Monaco } from "@monaco-editor/react";
// import { Monaco } from "@monaco-editor/react";
import axios from "axios";
import { LANGUAGE_CONFIG } from "@/constants";
//To get the initial state 
export const initialState = () => {
  if (typeof window == "undefined") {
    return {
      language: "javascript",
      fontSize: 16,
      theme: "vs-dark",
    };
  }

  const oldLanguage = localStorage.getItem("editor-language") || "javascript";
  const oldTheme = localStorage.getItem("editor-theme") || "vs-dark";
  const oldFontSize = parseInt(
    localStorage.getItem("editor-font-size") || "16",
    10
  );

  return {
    language: oldLanguage,
    fontSize: oldFontSize,
    theme: oldTheme,
  };
};

export const useCodeEditorStore = create<CodeEditorState>((set, get) => {
  const state = initialState();

  return {
    ...state,
    output: "",
    isRunning: false,
    error: null,
    editor: null,
    executionResult: null,
    customInput: "",
    setCustomInput: (input: string) => {
      set({ customInput: input });
    },
    getCode: () => get().editor?.getValue() || "",
    setEditor: (editor: Monaco) => {
      const code = localStorage.getItem(`editor-code-${get().language}`);
      if (code) {
        editor.setValue(code);
      }
      set({ editor });
    },
    setTheme: (theme: string) => {
      localStorage.setItem(`editor-theme`, theme);
      set({ theme });
    },

    setFontSize: (fontSize: number) => {
      localStorage.setItem(`editor-font-size`, fontSize.toString());
      set({ fontSize });
    },

    setLanguage: (language: string) => {
      const currCode = get().editor?.getValue();
      if (currCode) {
        localStorage.setItem(`editor-code-${get().language}`, currCode);
      }

      localStorage.setItem(`editor-language`, language);
      set({ language, output: "", error: null });
    },

    runCode: async () => {
      const { language, getCode } = get();
      const code = getCode();

      if (!code) {
        set({ error: "please enter code" });
        return;
      }

      set({ isRunning: true, error: null });

      try {
        const { customInput } = get();
        const current = LANGUAGE_CONFIG[language].pistonRuntime;
        const response = await axios.post(
          "https://emkc.org/api/v2/piston/execute",
          {
            language: current.language,
            version: current.version,
            files: [{ content: code }],
            stdin: customInput || "",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
        set({customInput:""})

        const { data } = response;
        console.log("at context -->", data);

        if (data.compile && data.compile.code !== 0) {
          const error = data.compile.stderr || data.output;
          set({
            error,
            executionResult: {
              code,
              output: "",
              error,
            },
          });
          set({isRunning:false})
          return;
        }

        if (data.run && data.run.code !== 0) {
          const error = data.run.stderr || data.run.output;
          set({
            error,
            executionResult: {
              code,
              output: "error occured",
              error,
            },
          });
        }

        const output = data.run.output;

        set({
          output: output.trim(),
          isRunning: false,
          executionResult: {
            code,
            output: output.trim(),
            error: null,
          },
        });
      } catch (e) {
        console.log(e);
        set({
            error:"An error occured while running code ",
            isRunning: false,
            executionResult:{
                code , 
                output: "",
                error: "An error occured while running code",
            }
        })
         
    }
    },
  };
});
