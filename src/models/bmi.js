const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
};

const classifyBMI = (bmi) => {
    if (bmi < 18.5) {
        return 'Gầy';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Bình thường';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Thừa cân';
    } else {
        return 'Béo phì';
    }
};

module.exports = { calculateBMI, classifyBMI };