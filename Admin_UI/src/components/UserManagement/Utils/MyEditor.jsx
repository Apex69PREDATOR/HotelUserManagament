import { useEffect, useState } from "react";

let useQuillHook;

if (typeof window !== "undefined") {
  // Load only on client
  import("react-quilljs").then((mod) => {
    useQuillHook = mod.useQuill;
  });
}

export default function MyEditor() {
  const [quillLoaded, setQuillLoaded] = useState(false);
  const [useQuillRef, setUseQuillRef] = useState(null);

  useEffect(() => {
    if (useQuillHook) {
      setUseQuillRef(useQuillHook);
      setQuillLoaded(true);
    }
  }, []);

  if (!quillLoaded) return <div>Loading editor...</div>;

  const { quill, quillRef } = useQuillRef();

  return <div className="bg-white rounded-lg"
                  style={{ height: "180px" }}ref={quillRef}></div>;
}
