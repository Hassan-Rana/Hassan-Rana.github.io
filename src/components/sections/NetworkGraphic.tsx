/**
 * Decorative road-network graph for the hero — a nod to graph-based traffic
 * research. A lime "route" travels across a few nodes. Purely visual.
 */

const nodes: [number, number][] = [
  [40, 70], [150, 40], [270, 80], [400, 50], [460, 150],
  [70, 190], [190, 160], [320, 190], [420, 260], [30, 320],
  [140, 290], [250, 300], [360, 340], [470, 360], [200, 400],
  [90, 420], [330, 440],
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 6], [2, 7], [3, 7],
  [4, 7], [4, 8], [5, 6], [6, 7], [7, 8], [5, 9], [5, 10], [6, 10], [6, 11],
  [7, 11], [7, 12], [8, 12], [8, 13], [9, 10], [10, 11], [11, 12], [12, 13],
  [10, 14], [11, 14], [12, 16], [14, 16], [9, 15], [15, 14], [13, 16],
];

// The highlighted route, as a sequence of node indices.
const route = [0, 5, 6, 7, 12, 16];
// Nodes that gently pulse, like congestion hotspots.
const pulsing = [6, 11, 8];

const point = (i: number) => nodes[i] as [number, number];

export function NetworkGraphic({ className = '' }: { className?: string }) {
  const routeD = route.map((n, i) => `${i === 0 ? 'M' : 'L'}${point(n)[0]} ${point(n)[1]}`).join(' ');

  return (
    <svg
      viewBox="0 0 500 470"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <g stroke="rgb(236 233 225 / 0.14)" strokeWidth="1">
        {edges.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={point(a)[0]} y1={point(a)[1]} x2={point(b)[0]} y2={point(b)[1]} />
        ))}
      </g>

      {/* Soft glow under the route */}
      <path d={routeD} stroke="rgb(197 240 74 / 0.18)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d={routeD}
        className="route-path"
        stroke="#c5f04a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {pulsing.map((n) => (
        <circle key={`p-${n}`} cx={point(n)[0]} cy={point(n)[1]} r="9" fill="rgb(233 196 106 / 0.35)" className="node-pulse" />
      ))}

      {nodes.map(([x, y], i) => {
        const onRoute = route.includes(i);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={onRoute ? 4.5 : 3}
            fill={onRoute ? '#c5f04a' : '#121516'}
            stroke={onRoute ? '#c5f04a' : 'rgb(236 233 225 / 0.45)'}
            strokeWidth="1.25"
          />
        );
      })}

      {/* Start / end labels */}
      <g fontFamily="Geist Mono, ui-monospace, monospace" fontSize="10" fill="rgb(236 233 225 / 0.55)">
        <text x={point(0)[0] + 10} y={point(0)[1] - 10}>origin</text>
        <text x={point(16)[0] + 10} y={point(16)[1] + 18}>destination</text>
      </g>
    </svg>
  );
}
