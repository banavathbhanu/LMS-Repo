import React, { useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";


const Dashboard = () => {
    const [selectedBatch, setSelectedBatch] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOption, setFilterOption] = useState('course');
    const [courseFilter, setCourseFilter] = useState('');
    const [gradeFilter, setGradeFilter] = useState('');
    const [trainerFilter, setTrainerFilter] = useState('');
    const [evaluationTypeFilter, setEvaluationTypeFilter] = useState('');

    const batches = ['Batch-100', 'Batch-101', 'Batch-102', 'Batch-103', 'Batch-104', 'Batch-105'];

    const handleSelectBatch = (batch) => {
        setSelectedBatch(batch);
    };

    const handleSelectCourse = (course) => {
        setCourseFilter(course);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const TABLE_HEAD = ["Employee ID", "Name", "Courses", "Trainer", "Evaluation Type", "Grades"]; // Added "Evaluation Type" to table header

    const TABLE_ROWS = [
        { id: 7456, name: 'deepika', course: "java", trainer: "yalamchili", evaluationType: "Evaluation", grades: 'Very Poor' },
        { id: 7489, name: 'deepika', course: "python", trainer: "yalamchili", evaluationType: "Reevaluation", grades: 'Poor' },
        { id: 9076, name: 'deepika', course: "SQL", trainer: "yalamchili", evaluationType: "Evaluation", grades: 'Average' },
        { id: 8976, name: 'Pranay', course: "java", trainer: "Anu", evaluationType: "Evaluation", grades: 'Very Poor' },
        { id: 7468, name: 'Pranay', course: "python", trainer: "Anu", evaluationType: "Reevaluation", grades: 'Poor' },
        { id: 7865, name: 'Pranay', course: "SQL", trainer: "Anu", evaluationType: "Evaluation", grades: 'Average' },
        { id: 7490, name: 'Bhanu', course: "java", trainer: "Maagi", evaluationType: "Evaluation", grades: 'Very Poor' },
        { id: 7469, name: 'Bhanu', course: "python", trainer: "Maagi", evaluationType: "Reevaluation", grades: 'Poor' },
        { id: 7652, name: 'Bhanu', course: "SQL", trainer: "Maagi", evaluationType: "Evaluation", grades: 'Average' },
        // Add more data as needed
    ];

    let filteredRows = TABLE_ROWS;

    // Apply filters
    // Apply filters
if (filterOption === 'course' && courseFilter !== '') {
    filteredRows = filteredRows.filter(row => row.course.toLowerCase() === courseFilter.toLowerCase());
}

if (filterOption === 'grade' && gradeFilter !== '') {
    filteredRows = filteredRows.filter(row => row.grades.toLowerCase() === gradeFilter.toLowerCase());
}

if (filterOption === 'trainer' && trainerFilter !== '') {
    filteredRows = filteredRows.filter(row => row.trainer.toLowerCase() === trainerFilter.toLowerCase());
}

if (filterOption === 'evaluationType' && evaluationTypeFilter !== '') {
    filteredRows = filteredRows.filter(row => row.evaluationType.toLowerCase() === evaluationTypeFilter.toLowerCase());
}

// Filter the filteredRows based on search query
if (searchQuery.trim() !== '') {
    filteredRows = filteredRows.filter(row =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.grades.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.trainer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.evaluationType.toLowerCase().startsWith(searchQuery.toLowerCase())||
        row.id.toString().includes(searchQuery.toLowerCase()) // Search for employee ID

    );
}


    const uniqueCourses = Array.from(new Set(TABLE_ROWS.map(row => row.course)));
    const uniqueGrades = Array.from(new Set(TABLE_ROWS.map(row => row.grades)));
    const uniqueTrainers = Array.from(new Set(TABLE_ROWS.map(row => row.trainer)));
    const uniqueEvaluationType = Array.from(new Set(TABLE_ROWS.map(row => row.evaluationType)));

    return (
        <div>
            <nav className="bg-gray-800 p-4 rounded-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-white text-3xl font-semibold">Evaluation</h1>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border rounded-l px-2 py-1 text-white bg-gray-700"
                            style={{ marginRight: '23rem' }}
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <select
                            value={selectedBatch}
                            onChange={(e) => handleSelectBatch(e.target.value)}
                            className="border rounded-r px-2 py-1 text-white bg-gray-700"
                        >
                            <option value="">Select Batch</option>
                            {batches.map((batch) => (
                                <option key={batch} value={batch}>{batch}</option>
                            ))}
                        </select>
                        {filterOption === 'course' && (
                            <select
                                value={courseFilter}
                                onChange={(e) => handleSelectCourse(e.target.value)}
                                className="border rounded px-2 py-1 text-white bg-gray-700 ml-4"
                            >
                                <option value="">All Courses</option>
                                {uniqueCourses.map((course, index) => (
                                    <option key={index} value={course}>{course}</option>
                                ))}
                            </select>
                        )}
                        {filterOption === 'grade' && (
                            <select
                                value={gradeFilter}
                                onChange={(e) => setGradeFilter(e.target.value)}
                                className="border rounded px-2 py-1 text-white bg-gray-700 ml-4"
                            >
                                <option value="">All Grades</option>
                                {uniqueGrades.map((grade, index) => (
                                    <option key={index} value={grade}>{grade}</option>
                                ))}
                            </select>
                        )}
                        {filterOption === 'trainer' && (
                            <select
                                value={trainerFilter}
                                onChange={(e) => setTrainerFilter(e.target.value)}
                                className="border rounded px-2 py-1 text-white bg-gray-700 ml-4"
                            >
                                <option value="">All Trainers</option>
                                {uniqueTrainers.map((trainer, index) => (
                                    <option key={index} value={trainer}>{trainer}</option>
                                ))}
                            </select>
                        )}
                        {filterOption === 'evaluationType' && (
                            <select
                                value={evaluationTypeFilter}
                                onChange={(e) => setEvaluationTypeFilter(e.target.value)}
                                className="border rounded px-2 py-1 text-white bg-gray-700 ml-4"
                            >
                                <option value="">All Valuations</option>
                                {uniqueEvaluationType.map((evaluationType, index) => (
                                    <option key={index} value={evaluationType}>{evaluationType}</option>
                                ))}
                            </select>
                        )}
                        <select
                            value={filterOption}
                            onChange={(e) => setFilterOption(e.target.value)}
                            className="border rounded px-2 py-1 text-white bg-gray-700 ml-4"
                        >
                            <option value="course">Search Course wise</option>
                            <option value="grade">Search Grade wise</option>
                            <option value="trainer">Search Trainer wise</option>
                            <option value="evaluationType">Evaluation Type Wise</option>
                        </select>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto mt-4">
                <h2 className="text-xl font-semibold mb-2 ">
                    <u>Trainees of {selectedBatch}</u>
                </h2>
                <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {!selectedBatch ? (
                                <tr>
                                    <td colSpan="6" className="border px-4 py-2 text-center">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            Please select a batch to view trainees.
                                        </Typography>
                                    </td>
                                </tr>
                            ) : (
                                filteredRows.map((trainee) => (
                                    <tr key={trainee.id} className="even:bg-blue-gray-50/50">
                                        <td className="border px-4 py-2">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {trainee.id}
                                            </Typography>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {trainee.name}
                                            </Typography>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {trainee.course}
                                            </Typography>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {trainee.trainer}
                                            </Typography>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {trainee.evaluationType} {/* Render Evaluation Type */}
                                            </Typography>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {trainee.grades}
                                            </Typography>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
