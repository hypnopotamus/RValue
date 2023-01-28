export const EffectiveRValue = (
    outside: number,
    thermostat: number,
    targetReadings: [number, number, number, number],
    indoorReading: number
): number => {
    const [one, two, three, four] = targetReadings;

    return one + two + three + four + outside + thermostat + indoorReading;
};