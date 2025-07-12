const OverlayPreview = ({ overlayProject }: { overlayProject: any }) => {
  const { image: imageUrl, position } = overlayProject;

  if (!imageUrl || !position) return null;

  // Map [0–100] to [-15px, +15px] range
  const xOffset = -((position.x - 50) / 50) * 15;
  const yOffset = -((position.y - 50) / 50) * 15;

  return (
    <div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        transform: `translate(${xOffset}px, ${yOffset}px)`,
        transition: "transform 0.1s linear",
      }}
    >
      <img
        src={"/static/rehearsalgpt-landing.png"}
        alt="Project preview"
        style={{
          width: "40vw",
          height: "auto",
          objectFit: "contain",
          opacity: 0.95,
        }}
      />
    </div>
  );
};

export default OverlayPreview;
