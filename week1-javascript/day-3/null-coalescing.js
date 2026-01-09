//Nullish coalescing (??) is a logical operator, primarily in JavaScript/TypeScript, that provides a default value only when a left-hand operand is null or undefined, unlike || (OR) which triggers for any falsy value (like 0, "", false). It returns the right-hand operand if the left is nullish, otherwise the left operand, simplifying default assignment for missing data without ignoring valid falsy values. 
const name = null
const nameError = 'Name is missing'
const result = name??nameError
console.log(result) 

/* difference between ?? and ||
The logical OR operator returns the right-hand value if the left-hand value is falsy. "Falsy" includes a wide range of values: 
null
undefined
false
0 (zero)
"" (empty string)
NaN (Not a Number) 

The nullish coalescing operator returns the right-hand value only if the left-hand value is specifically null or undefined. 
*/

/* examples */
//1. Financial report
const profit = null
const profit_result = profit??'Data Not Available'
//output: Data not available

//2. Feature flag from backend
const flag = null
const f = flag ?? 'default'
console.log(f)

//3. User input with emptry string
const user_input = ""
const uf = user_input??'Please enter a something'

console.log(uf)

//4. API Timeout config
const DEFAULT_TIMEOUT = 30
const api_config = {
    timeout:50
}
console.log(api_config.timeout??DEFAULT_TIMEOUT)

//5. Permission level system 
const profile = {
    permission:{
        read:1,
        write:null
    }
}

console.log(profile.permission.write??'Permission not set')

//6. Analytics event count
const event_count =undefined
console.log(event_count??'Event not defined')

//7. Localization language preference
const lang_preference = null
const user_lang = lang_preference??'English'
console.log(user_lang)

//8. Payment Retry Attempts
const retry_count = null //not tracked
const retry = (retry_count??'Retry')

//9. UI Layout config
const sidebar = null
const sidebar_status = (sidebar??'collapsed')

//10. A/B Testing Variant Assignment
const variant = 'A'
const test = (variant??'B')
console.log(test)