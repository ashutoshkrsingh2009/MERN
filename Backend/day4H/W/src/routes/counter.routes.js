const express=require("express")
const router=express.Router()


let count = 0;


router.patch("/", (req, res) => {
    try {
        count=count+1

        res.json({
            msg: "Count incremented",
            count: count
        });
    } catch (error) {
        res.json({
            err: error.message
        });
    }
});


router.delete("/", (req, res) => {
    try {
        count=count-1

        res.json({
            msg: "Count decremented",
            count: count
        });
    } catch (error) {
        res.json({
            err: error.message
        });
    }
});


router.get("/", (req, res) => {
    try {
        count = 0;

        res.json({
            msg: "Count reset",
            count: count
        });
    } catch (error) {
        res.json({
            err: error.message
        });
    }
});


module.exports={
    counterRouter:router
}