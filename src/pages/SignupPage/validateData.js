export default function validateData(
    {
        firstname,
        lastname,
        gender,
        dob,
        email,
        username,
        password,
        confirmPassword
    }
) {
    let errors = [];
    !/^\s*[A-Za-z]{2,}\s*$/gm.test(firstname) && errors.push("*Firstname : enter firstname");
    !/^\s*[A-Za-z]{2,}\s*$/gm.test(lastname) && errors.push("*Lastname : enter lastname");
    !/^(?!.*select)(male|female|other)$/.test(gender) && errors.push("*Gender : select gender");
    if (!/^(?:\d{4}[-/](?:0[1-9]|1[0-2])[-/](?:0[1-9]|[12]\d|3[01])|\d{2}[-/](?:0[1-9]|[12]\d|3[01])[-/]\d{4})$/g.test(dob)) {
        errors.push("*DOB : enter valid date");
    }
    else if (!isValidDOB(dob)) { errors.push("*DOB : enter valid Date of Birth"); }
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && errors.push("*Email : enter correct email");
    !/^[a-zA-Z0-9._-]{7,}$/.test(username) && errors.push("*Username : usernames must be at least 7 characters long");
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+-=,./?;:'"[\]{}|`~]{8,}$/.test(password) && errors.push(`*Password : Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit`);
    password !== confirmPassword && errors.push("*Confirm Password : password does not match");
    confirmPassword.length === 0 && errors.push("*Confirm Password : enter password");
    if (errors.length == 0) errors = false;

    return errors;
}

function isValidDOB(dob) {
    const dateArr = dob.split("-");
    const date = new Date(
        dateArr[0],
        dateArr[1] - 1,
        dateArr[2]
    );
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (date < yesterday) return true;
    else return false;
}
