export default function Pomodoroclock() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-20">
      <div id="break-label">
        <button id="break-decrement"></button>
        <button id="break-length">5</button>
      </div>
      <div id="session-label">Session Length</div>
    </div>
  );
}
