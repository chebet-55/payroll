let form = document.getElementById("myform")


form.addEventListener("submit", function (e) {
    e.preventDefault()
    let basic_salary = Number(document.getElementById("basic_salary").value);
    let benefits = Number(document.getElementById("benefits").value);
    let gross_salary = calc_gross(basic_salary, benefits)
    document.getElementById("gross").innerHTML = gross_salary

    let nhif = calc_Nhif(gross_salary)
    document.getElementById("NHIF").innerHTML = nhif
    let nssf = calc_nssf(gross_salary)
    document.getElementById("NSSF").innerHTML = nssf
    let nhdf = calc_nhdf(gross_salary)
    document.getElementById("NHDF").innerHTML = nhdf
    let payee = calc_payee(gross_salary)
    document.getElementById("PAYEE").innerHTML = payee
    let net_pay = calc_netsalary(gross_salary,nhif,nssf,nhdf,payee)
    document.getElementById("Net Pay").innerHTML = net_pay


})

function calc_gross(a, b) {
    let gross_salary = a + b
    return gross_salary
}
let gross_salary = calc_gross(basic_salary, benefits)
console.log(gross_salary)


function calc_Nhif(gross) {
    let nhif_contribution = 0
    if (gross >= 0 && gross <= 5999) {
        nhif_contribution = 150
    }
    else if (gross >= 6000 && gross <= 7999) {
        nhif_contribution = 300
    } else if (gross >= 8000 && gross <= 11999) {
        nhif_contribution = 400
    } else if (gross >= 12000 && gross <= 14999) {
        nhif_contribution = 500
    } else if (gross >= 15000 && gross <= 19999) {
        nhif_contribution = 600
    } else if (gross >= 20000 && gross <= 24999) {
        nhif_contribution = 750
    } else if (gross >= 25000 && gross <= 29999) {
        nhif_contribution = 850
    } else if (gross >= 30000 && gross <= 34999) {
        nhif_contribution = 900
    } else if (gross >= 35000 && gross <= 39999) {
        nhif_contribution = 950
    } else if (gross >= 40000 && gross <= 44999) {
        nhif_contribution = 1000
    } else if (gross >= 45000 && gross <= 49999) {
        nhif_contribution = 1100
    } else if (gross >= 50000 && gross <= 59999) {
        nhif_contribution = 1200
    } else if (gross >= 60000 && gross <= 69999) {
        nhif_contribution = 1300
    } else if (gross >= 70000 && gross <= 79999) {
        nhif_contribution = 1400
    } else if (gross >= 80000 && gross <= 89999) {
        nhif_contribution = 1500
    } else if (gross >= 90000 && gross <= 99999) {
        nhif_contribution = 1600
    } else {
        nhif_contribution = 1700
    }
    return nhif_contribution
}
let NHIF = calc_Nhif(gross_salary)
console.log("NHIF", NHIF)

function calc_nssf(x, rate = 0.06) {
    let nssf_contribution = 0

    if (x > 0 && x <= 18000) {
        nssf_contribution = x * rate
    } else {
        nssf_contribution = 18000 * rate
    } return nssf_contribution
}
let NSSF = calc_nssf(gross_salary)
console.log("NSSF", NSSF)

function calc_nhdf(gross, rate = 0.015) {
    let nhdf_contribution = gross * rate
    return nhdf_contribution
}
let NHDF = calc_nhdf(gross_salary)
console.log("NHDF", NHDF)

function calc_taxable_income(a, b, c) {
    let taxable_income = a - (b + c)
    return taxable_income
}
let taxable_income = calc_taxable_income(gross_salary, NSSF, NHDF)
console.log("taxable_income", taxable_income)

function calc_payee(tax) {
    let payee = 0
    let relief = 2400
    if (tax >= 0 && tax <= 24000) {
        payee = (24000 * 0.01) - relief
    } else if (tax > 24000 && tax <= 32333) {
        payee = (24000 * 0.01) + ((tax - 24000) * 0.25) - relief
    } else if (tax > 32333 && tax <= 500000) {
        payee = (24000 * 0.01) + (8333 * 0.25) + (tax - 32333) * 0.3 - relief
    } else if (tax > 500000 && tax <= 800000) {
        payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((tax - 500000) * 0.325) - relief
    } else {
        payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((tax - 800000) * 0.325) - relief
    } return payee
}
let PAYEE = calc_payee(taxable_income)
console.log("PAYEE", PAYEE)

function calc_netsalary(a, b, c, d, e) {
    let net_salary = a - (b + c + d + e)
    return net_salary
} let net_pay = calc_netsalary(gross_salary, NHIF, NSSF, NHDF, PAYEE)
console.log("net pay", net_pay)