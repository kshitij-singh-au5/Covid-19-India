import React, { Component } from 'react';
import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';





const PieCharts = ({ data }) => {
    const data01 = [
        { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
    ];
    var states = [
        { "name": 'Maharashtra' },
        { "name": 'Andhra Pradesh' },
        { "name": 'Karnataka' },
        { "name": 'Tamil Nadu' },
        { "name": 'Uttar Pradesh' },
        { "name": 'Kerala' },
        { "name": 'Delhi' },
        { "name": 'West Bengal' },
        { "name": 'Odisha' },
        { "name": 'Telangana' },
        { "name": 'Bihar' },
        { "name": 'Assam' },
        { "name": 'Rajasthan' },
        { "name": 'Chhattisgarh' },
        { "name": 'Gujarat' },
        { "name": 'Madhya Pradesh' },
        { "name": 'Haryana' },
        { "name": 'Punjab' },
        { "name": 'Jharkhand' },
        { "name": 'Jammu and Kashmir' },
        { "name": 'Uttarakhand' },
        { "name": 'Goa' },
        { "name": 'Puducherry' },
        { "name": 'Tripura' },
        { "name": 'Himachal Pradesh' },
        { "name": 'Manipur' },
        { "name": 'Arunachal Pradesh' },
        { "name": 'Chandigarh' },
        { "name": 'Meghalaya' },
        { "name": 'Nagaland' },
        { "name": 'Ladakh' },
        { "name": 'Andaman and Nicobar Islands' },
        { "name": 'Sikkim', },
        { "name": 'Dadra and Nagar Haveli' },
        { "name": 'Mizoram' },
        { "name": 'Unnamed state' }
    ]

    var arr = []
    for (let i = 0; i < 36; i++) {
        arr.push("value")
    }

    var activeArr = []

    data.map((element) => {
        activeArr.push(Number(element.active))
    })

    var mergedArray = arr.map(function (value, index) {
        return [value, activeArr[index]]
    });

    let arr3 = states.map((item, i) => Object.assign({}, item, mergedArray[i]));

    for (let i = 0; i < arr3.length; i++) {
        arr3[i].value = arr3[i][1];
        delete arr3[i][1];
    }

    var mappedArrayData = arr3.map(({ name, value }) => {
        return { name, value };
    })

    // const newArr = mappedArrayData.map((i) => Number(i.value));

    // console.log(newArr);

    // console.log("datapiechart0", states)
    // console.log("datapiechart1", mergedArray)
    // console.log("datapiechart2", arr3)
    return (
        <div style={{marginLeft:"20%"}}>
            <h2 style={{marginLeft:"28%"}}>Statewise Active Cases</h2>
            <PieChart width={1600} height={800}>
                <Pie dataKey="value" data={mappedArrayData} isAnimationActive={true} cx={200} cy={200} outerRadius={160} fill="#8884d8" label />
                
                <Pie data={mappedArrayData} cx={700} cy={200} innerRadius={0} outerRadius={160} fill="#82ca9d"/>
                <Tooltip />
            </PieChart>
        </div>
    );

}

export default PieCharts
