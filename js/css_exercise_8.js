const addRequiredAttributes = () => {
    let requiredFields = ['name', 'city', 'address'];
    requiredFields.forEach(function(fieldId) {
        document.getElementById(fieldId).setAttribute('required', true);
    });
}

const validatePattern = (field) => {
    const pattern = field.getAttribute('pattern');
    if (pattern) {
        const regex = new RegExp(pattern);
        return regex.test(field.value);
    }
    return true;
}

const nextStep = () => {
    addRequiredAttributes();

    // 檢查所有欄位
    let allInputFields = document.querySelectorAll('#sender-form input');
    allInputFields.forEach(function(field) {
        if ((!field.value.trim() && field.required) || (field.value.trim() && !validatePattern(field))) {
            field.classList.add('invalid');
        } else {
            field.classList.remove('invalid');
        }
    });
}