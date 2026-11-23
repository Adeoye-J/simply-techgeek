// /**
//  * Renders [{ text, gradient? }] segments from the JSON content files.
// */
export default function RichText({ segments = [] }) {
  return (
    <>
      {segments.map((segment, i) =>
        segment.gradient ? (
          <span key={i} className="grad-text">
            {segment.text}
          </span>
        ) : (
          <span key={i}>{segment.text}</span>
        ),
      )}
    </>
  );
}