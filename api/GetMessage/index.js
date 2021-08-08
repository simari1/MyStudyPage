module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    setTimeout(function(){
        context.res = {
            body: { text: "Hello from the Azure Functions API" }
        };
    }, 3000);
    
    context.log('JavaScript HTTP trigger function ended');
    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };
}