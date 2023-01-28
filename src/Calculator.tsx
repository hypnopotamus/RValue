import { Card, Grid, Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { EffectiveRValue } from "./RValueCalculation";

export const Calculator = () => {
    const [outside, setOutside] = useState<number>();
    const [thermostat, setThermostat] = useState<number>();
    const [readingOne, setReadingOne] = useState<number>();
    const [readingTwo, setReadingTwo] = useState<number>();
    const [readingThree, setReadingThree] = useState<number>();
    const [readingFour, setReadingFour] = useState<number>();
    const [indoorReading, setIndoorReading] = useState<number>();

    const handleChange = (set: React.Dispatch<React.SetStateAction<number | undefined>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        set(Number(event.target.value));
    };

    const RValue = outside && thermostat && readingOne && readingTwo && readingThree && readingFour && indoorReading
        ? EffectiveRValue
            (
                outside,
                thermostat,
                [readingOne, readingTwo, readingThree, readingFour],
                indoorReading
            )
        : undefined;

    //todo: alignment of the readings is not right
    return <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}  >
        <TextField label="Outside" type="number" value={outside} onChange={handleChange(setOutside)} />
        <TextField label="Thermostat" type="number" value={thermostat} onChange={handleChange(setThermostat)} />
        <Card raised>
            <Grid container padding={2} direction="row" spacing={2} columns={2}>
                <Grid item xs={2}>
                    <Typography color="text.secondary">
                        Take Four Readings on the Target Surface
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <TextField label="Reading One" type="number" value={readingOne} onChange={handleChange(setReadingOne)} />
                </Grid>
                <Grid item xs={1}>
                    <TextField label="Reading Two" type="number" value={readingTwo} onChange={handleChange(setReadingTwo)} />
                </Grid>
                <Grid item xs={1}>
                    <TextField label="Reading Three" type="number" value={readingThree} onChange={handleChange(setReadingThree)} />
                </Grid>
                <Grid item xs={1}>
                    <TextField label="Reading Four" type="number" value={readingFour} onChange={handleChange(setReadingFour)} />
                </Grid>
            </Grid>
        </Card>
        <TextField label="Inside Reading" type="number" value={indoorReading} onChange={handleChange(setIndoorReading)} />
        {
            RValue && <Typography variant="h2">Effective RValue: {RValue}</Typography>
        }
    </Stack>;
};