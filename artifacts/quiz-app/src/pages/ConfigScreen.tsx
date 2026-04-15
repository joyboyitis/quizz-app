import { useState } from "react";
import { Monitor, Smartphone, CheckCircle } from "lucide-react";
import { useInstallPrompt } from "../hooks/useInstallPrompt";

type Category = "UAS" | "C-UAS";
type QuestionCount = 5 | 10 | 15 | 20;

interface ConfigScreenProps {
  onStart: (category: Category, count: QuestionCount) => void;
}

export function ConfigScreen({ onStart }: ConfigScreenProps) {
  const [category, setCategory] = useState<Category>("UAS");
  const [count, setCount] = useState<QuestionCount>(10);
  const { canInstall, installed, triggerInstall } = useInstallPrompt();

  const questionCounts: QuestionCount[] = [5, 10, 15, 20];

  async function handleDesktopInstall() {
    if (canInstall) {
      await triggerInstall();
    } else if (installed) {
      alert("The app is already installed on your device!");
    } else {
      alert(
        "To install on Desktop:\n\n1. Open this site in Chrome or Edge\n2. Look for the install icon (⊕) in the address bar\n3. Click it and select \"Install\"\n\nThe app will install as a desktop app!"
      );
    }
  }

  async function handleAndroidInstall() {
    if (canInstall) {
      await triggerInstall();
    } else if (installed) {
      alert("The app is already installed on your device!");
    } else {
      alert(
        "To install on Android:\n\n1. Open this site in Chrome\n2. Tap the menu (⋮) in the top right\n3. Select \"Add to Home Screen\"\n4. Tap \"Add\" to confirm\n\nThe app will appear on your home screen!"
      );
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#3B5BDB" }}>
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Quiz configuration
        </h1>

        {/* Category Selection */}
        <div className="mb-6">
          <p className="text-gray-600 text-center mb-3 font-medium">Select Category</p>
          <div className="flex gap-3">
            <button
              onClick={() => setCategory("UAS")}
              className={`flex-1 py-2.5 px-4 rounded-lg border-2 font-medium transition-all text-sm ${
                category === "UAS"
                  ? "border-blue-500 bg-blue-50 text-blue-600"
                  : "border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              UAS
            </button>
            <button
              onClick={() => setCategory("C-UAS")}
              className={`flex-1 py-2.5 px-4 rounded-lg border-2 font-medium transition-all text-sm ${
                category === "C-UAS"
                  ? "border-blue-500 bg-blue-50 text-blue-600"
                  : "border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              C-UAS
            </button>
          </div>
        </div>

        {/* Number of Questions */}
        <div className="mb-8">
          <p className="text-gray-600 text-center mb-3 font-medium">No. of questions</p>
          <div className="flex gap-2 justify-center">
            {questionCounts.map((c) => (
              <button
                key={c}
                onClick={() => setCount(c)}
                className={`w-14 h-10 rounded-lg border-2 font-medium transition-all text-sm ${
                  count === c
                    ? "border-blue-500 bg-blue-50 text-blue-600"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Start Quiz Button */}
        <button
          onClick={() => onStart(category, count)}
          className="w-full py-3 rounded-xl font-semibold text-white text-base transition-all hover:opacity-90 active:scale-[0.98]"
          style={{ backgroundColor: "#3B5BDB" }}
        >
          Start Quiz
        </button>

        {/* Download Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          {installed ? (
            <div className="flex items-center justify-center gap-2 text-green-600">
              <CheckCircle size={18} />
              <span className="text-sm font-medium">App is installed on this device</span>
            </div>
          ) : (
            <>
              <p className="text-gray-400 text-xs text-center mb-3">
                {canInstall
                  ? "Install this app for offline access:"
                  : "Want to play offline? Download the app:"}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleAndroidInstall}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-medium text-white text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: "#2D8E4E" }}
                >
                  <Smartphone size={16} />
                  Android APK
                </button>
                <button
                  onClick={handleDesktopInstall}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-medium text-white text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: "#1A1A2E" }}
                >
                  <Monitor size={16} />
                  Desktop App
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
