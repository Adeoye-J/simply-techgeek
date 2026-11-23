/**
 * The gradient header graphic. Used on the card and at the top of the popup.
 */
export default function ProjectVisual({ visual, height = 'h-[180px]' }) {
    const [from, to] = visual.gradient;

    return (
        <div
            className={`relative overflow-hidden ${height}`}
            style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
        >
            {visual.shapes.map((shape, i) => (
                <div key={i} className="absolute rounded-2xl" style={shape} />
            ))}
        </div>
    );
}