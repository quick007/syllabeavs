import UploadPopup from "./components/upload-popup";

export default function Page() {
  return (
    <main className="flex grow h-screen">
      <div className="w-60 p-4">
        <div className="flex justify-between items-center">
          sidebar
          <UploadPopup />
        </div>
        <ul >
          <li>Meth 252</li>
          <li>WR 121</li>
        </ul>
      </div>
      <div className="grow">
        main content
        
      </div>
    </main>
  );
}
