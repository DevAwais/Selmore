const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const listAgencyForm = require('./controllers/listadd');
const getAllBillboard = require('./controllers/getallbillboard');
const megaBillboardData = require('./controllers/megaSaleBillboard');
const biddingBillboardData = require('./controllers/biddingBillboardData');
const bookedMarketPlaceBillboard = require('./controllers/bookedMarketPlaceBillboards');
const bookedMegaSaleBillboard = require('./controllers/bookedMegaSaleBillboards');
const biddingHistoryMaintene = require('./controllers/biddingHistoryMaintene');



module.exports = function (app) {

  //post routes
  //app.post('/signin',requireSignin,  Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/listadd', listAgencyForm.postAddData);
  app.post('/changeStatus', Authentication.changeStatus);
  app.post('/sendmegabillboard', megaBillboardData.postmegaSaleBillboard);
  app.post('/postbiddingbillboard', biddingBillboardData.postBiddingBillboard);
  app.post('/getspecificbillboard', getAllBillboard.getspecificBillboard);
  app.post('/postmarketPlaceBookedbillboard', bookedMarketPlaceBillboard.postBookedBillboard);
  app.post('/postMegaSalebillboard', bookedMegaSaleBillboard.postBookedMegaSaleBillboard);
  app.post('/biddingHistory', biddingHistoryMaintene.biddingHistory);
  app.post('/getspecificBiddingbillboardHistory', biddingHistoryMaintene.getspecificBillboardBiddingHistory);






  //get routes

  app.get('/getemails', Authentication.getemails);
  app.get('/getcompanyname', Authentication.getcompanyname);
  app.get('/getbillboard', getAllBillboard.getBillboard);
  app.get('/getalluser', Authentication.getAllUsers);
  app.get('/getallmegabillboard', megaBillboardData.getAllMegaBillBoardData);
  app.get('/getbiddingbillboard', biddingBillboardData.getBiddingbillboard);
  app.get('/getallbookedbillboard', bookedMarketPlaceBillboard.getBookedbillboard);
  app.get('/getallbookedMeagSalebillboard', bookedMegaSaleBillboard.getBookedMegaSalebillboard);


  //app.get('/getprofile',requireAuth, getprofile.getProfile)
}
