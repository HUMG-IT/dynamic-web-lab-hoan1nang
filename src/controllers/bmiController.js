const calculateBMI = (height, weight) => {
    const bmi = weight / (height * height);
    let category = '';
 
    if (bmi < 18.5) category = 'Gầy';
    else if (bmi < 24.9) category = 'Bình thường';
    else if (bmi < 29.9) category = 'Thừa cân';
    else category = 'Béo phì';
 
    return { bmi: bmi.toFixed(2), category };
 };
 
 const calculateBMIHandler = (req, res) => {
    const { height, weight } = req.body;
    const result = calculateBMI(height, weight);
    res.json(result);
 };
 
 module.exports = { calculateBMIHandler };
 