import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, ZAxis } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();

const mapData = [{
    key: 'data1',
    color: "#2ca02c",
    positions: [
        { x: 100, y: -1200, z: 100 },
        { x: 120, y: -1100, z: 160 },
        { x: 170, y: -1300, z: 100 },
        { x: 140, y: -1250, z: 180 },
        { x: 150, y: -1400, z: 100 },
        { x: 110, y: -1280, z: 100 },
    ]
}, {
    key: 'data2',
    color: "#bcbd22",
    positions: [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
    ]
}, {
    key: 'data3',
    color: "#e377c2",
    positions: [
        { x: 0, y: -1200, z: 200 },
        { x: -20, y: -1100, z: 260 },
        { x: -70, y: -1300, z: 400 },
        { x: -40, y: -1250, z: 280 },
        { x: -50, y: -1400, z: 500 },
        { x: -10, y: -1280, z: 200 },
    ]
}, {
    key: 'data4',
    color: "#17becf",
    positions: [
        { x: 0, y: 200, z: 200 },
        { x: -20, y: 100, z: 260 },
        { x: -70, y: 300, z: 400 },
        { x: -40, y: 250, z: 280 },
        { x: -50, y: 400, z: 500 },
        { x: -10, y: 280, z: 200 },
    ]
}]

const totalPositions = mapData.reduce((acc, { positions, color }) => {
    return [...acc, ...positions.map((pos) => { return { ...pos, color } })];
}, [])
export default function Example() {
    console.log(colors)

    return (
        <div style={{ height: '100vh', width: '70%', margin: 'auto' }}>
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                    width={400}
                    height={400}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                    <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                    
                    <XAxis ticks={[1.2, 2.8, 4.4, 6]}/>
                    <Scatter name="A school" data={totalPositions} fill="#2ca02c">
                        {totalPositions.map(({ color }, index) => (
                            <Cell key={`cell-${index}`} fill={color} />
                        ))}
                    </Scatter>


                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );

}
