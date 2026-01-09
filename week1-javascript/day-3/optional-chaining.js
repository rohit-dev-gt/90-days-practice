//optional chaining allows us to safely access object property without checking  if each intermediate reference is valid
// const user = {
//     settings:{
//         theme:'dark'
//     }
// }
// const theme = user?.settings?.theme??'light'
// console.log(theme)
//output : dark
// const user = {
//     settings:{
//     }
// }
// const theme = user?.settings?.theme??'light'
// console.log(theme)
//output: light

//optional array access
const users = ['John','Alex','Rhiya','Bhartax']
const current_user = users?.[3]
console.log(current_user)

const data = {
    profile:'Rohit singh',
    showProfile:function(){
        return this.profile
    }
}
console.log(data?.showProfile())

//examples 
//1. User Profile Access, access city of user profile without causing any error
const user = {
    profile:{
        name:'Rohit',
        address:{
            city:'New Delhi',
            pincode:119233
        }
    }
}
console.log(user?.profile?.address?.city)

//2. Nested setting object, check if user's email notification is enabled
const settings = {
    notifications:{
        email:{
            enabled:true
        }
    }
}
console.log(settings?.notifications?.email?.enabled)

//3. Product Reviews, access product's first review if exist
const product = {
    review:[
        {
            rating:5
        }
    ]
}
console.log(product?.review?.[0]?.rating)

//4. API Response Validation, Read the error message only if the error object exists.
const response = {
    error:{
        msg:'api limit hit'
    }
}

console.log(response?.error?.msg)

//5. DOM Element Handling, Attempt to read a property from the button without crashing the app.
//document → query result → property
const a = document.querySelector("#demo")
console.log(a?.innerHTML)

//6. Function Inside Object, 
const config = {
    callbacks:{
        onSuccess:function(){
            console.log('Success response handler')
        }
    }
}

console.log(config?.callbacks?.onSuccess())

//7.Shopping Cart Data
const cart = {
    items:[],
    summary:{
        total:330
    }
}
console.log(cart?.summary?.total)

//8.Authentication Object, Logged-in users have a session object; guests don’t., Check the login timestamp safely.
const auth = {
    session:{
        loginTime:9023423423
    }
}
console.log(auth?.session?.loginTime)

//9. Multi-Level Permissions, Check whether a user can edit content without assuming permissions exist.
const locaUser = {
    permissions:{
        editor:{
            canEdit:true
        }
    }
}
console.log(locaUser?.permissions?.editor?.canEdit)

//10.Dynamic JSON from Backend, Access feature status without breaking when the feature is missing.
const dataOne = {
    features:{
        beta:{
            enabled:true
        }
    }
}
console.log(dataOne?.features?.beta?.enabled)