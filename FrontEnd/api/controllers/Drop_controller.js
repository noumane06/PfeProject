const User = require('../models/user_model');


// deleting user with the use of userid
// Still need auth check (checking usrid in the token is the same).
// exports.user_delete = (req, res, next) => {
//     const id = req.params.userId;
//     User.deleteOne({ _id: id })
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: "User deleted succefully",
//                 result: result
//             });
//         })
//         .catch(err => {
//             res.status(404).json({
//                 error: " No such Id "
//             });
//             console.log(err);
//         });
// };
