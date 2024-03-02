function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const earthRadiusKm = 6371;

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * c;
}

export function calculateAverageDistance(
  coordinates: [number, number][],
): number {
  let totalDistance = 0;
  let pairCount = 0;

  coordinates.map((coordinate, index) => {
    coordinates.slice(index + 1).forEach(otherCoordinate => {
      const [lat1, lon1] = coordinate;
      const [lat2, lon2] = otherCoordinate;
      const distance = calculateDistance(lat1, lon1, lat2, lon2);
      totalDistance += distance;
      pairCount++;
    });
  });

  return totalDistance / pairCount;
}
