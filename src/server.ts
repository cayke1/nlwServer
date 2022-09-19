import app from "./app"

app.listen(process.env.PORT || 3333, () => {
    console.log("If in localhost, server running at http://localhost:3333");
});