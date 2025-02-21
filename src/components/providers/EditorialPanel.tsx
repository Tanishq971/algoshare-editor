"use client";
import { useCodeEditorStore } from "@/store/editorStore";
import { useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import { LANGUAGE_CONFIG } from "@/constants";
import { defineMonacoThemes } from "@/constants";

function EditorPanel() {
  const { language, theme, editor, setEditor } = useCodeEditorStore();

  useEffect(() => {
    const newCode =  LANGUAGE_CONFIG[language].defaultCode
    if (editor) {
      editor.setValue(newCode);
    }
  }, [language, editor]);
   


  const handleEditorChange = (value: string | undefined) => {
    if (value) localStorage.setItem(`editor-code-${language}`, value);
  };

  return (
    <div className="relative">
      <div className="relative bg-[#12121a]/90 backdrop-blur rounded-xl border border-white/[0.05] p-6">

        <div className="relative group rounded-xl overflow-hidden ring-1 ring-white/[0.05]">
          <Editor
            height="700px"
            language={LANGUAGE_CONFIG[language].monacoLanguage}
            onChange={handleEditorChange}
            theme={theme}
            beforeMount={defineMonacoThemes}
            onMount={(editor) => setEditor(editor)}
            options={{
              minimap: { enabled: false },
              fontSize:15,
              automaticLayout: true,
              scrollBeyondLastLine: false,
              padding: { top: 16, bottom: 16 },
              renderWhitespace: "selection",
              fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
              fontLigatures: true,
              cursorBlinking: "smooth",
              smoothScrolling: true,
              contextmenu: true,
              renderLineHighlight: "all",
              lineHeight: 1.6,
              letterSpacing: 0.5,
              roundedSelection: true,
              scrollbar: {
                verticalScrollbarSize: 8,
                horizontalScrollbarSize: 8,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EditorPanel;
