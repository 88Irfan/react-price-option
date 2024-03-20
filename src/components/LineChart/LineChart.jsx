import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const mathMarkData = [
        {"id": 1, "name": "Alice", "math_marks": 85, "accounting_marks": 75, "english_marks": 80},
        {"id": 2, "name": "Bob", "math_marks": 78, "accounting_marks": 70, "english_marks": 85},
        {"id": 3, "name": "Charlie", "math_marks": 92, "accounting_marks": 88, "english_marks": 90},
        {"id": 4, "name": "David", "math_marks": 65, "accounting_marks": 72, "english_marks": 78},
        {"id": 5, "name": "Eve", "math_marks": 88, "accounting_marks": 82, "english_marks": 86},
        {"id": 6, "name": "Frank", "math_marks": 70, "accounting_marks": 68, "english_marks": 75},
        {"id": 7, "name": "Grace", "math_marks": 95, "accounting_marks": 90, "english_marks": 92},
        {"id": 8, "name": "Helen", "math_marks": 81, "accounting_marks": 78, "english_marks": 83},
        {"id": 9, "name": "Ian", "math_marks": 75, "accounting_marks": 65, "english_marks": 70},
        {"id": 10, "name": "Jack", "math_marks": 90, "accounting_marks": 85, "english_marks": 88}
    ]
    ;
    
    return (
        <div>
            <LChart width={800} height={400} data={mathMarkData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_marks" stroke='green'></Line>
                <Line dataKey={'accounting_marks'} stroke='black'></Line>
                <Line dataKey={'english_marks'} stroke='red'></Line>
                {/* <Line dataKey={'accounting_marks'} stroke='black'></Line> */}

            </LChart>
        </div>
    );
};

export default LineChart;