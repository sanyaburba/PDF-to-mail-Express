module.exports = ({customer, workList, receiptId}) => {
    const today = new Date();
    let num = 0
    const entries = Object.entries(workList)

    function sumSalaries(salaries) {

        let sum = 0;
        for (let salary of Object.values(salaries)) {
            sum += salary;
        }

        return sum;
    }

    return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Invoice2</title>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet">

      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      
      <style>
      body{
    font-family: 'Montserrat', sans-serif !important;;
    }

.invoice-wrapper{
margin: 20px auto !important;;
max-width: 700px !important;;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) !important;
}
.invoice-top{
background: linear-gradient(135deg, #323149, #323149) !important;
padding: 60px 60px 80px !important;
}
.invoice-top-left{
background-color: #323149 !important;
/*margin-top: 60px;*/
}
.invoice-top-left h2, .invoice-top-right h2{
font-size: 22px !important;;
color: #fafafa !important;
margin-bottom: 4px !important;;
}
.invoice-top-left h3, .invoice-top-right h3{
font-size: 15px !important;;
font-weight: 400 !important;;
/*color: #fafafa !important;*/

margin-top: 0 !important;;
margin-bottom: 5px !important;;
}
.invoice-top-left h5, .invoice-top-right h5{
font-size: 14px !important;;
font-weight: 400 !important;;
/*color: #fafafa !important;*/

margin-top: 0 !important;;
}
.invoice-top-left h5 {
color: #fafafa !important;

}
.invoice-top-left h4{
margin-top: 40px !important;;
font-size: 22px !important;;
color: #fafafa !important;

}
.invoice-top-left h6{
font-size: 14px !important;;
color: #fafafa !important;

    font-weight: 400 !important;;
}

.invoice-top-right h2, .invoice-top-right h3, .invoice-top-right h5{
text-align: right !important;;
color: #000 !important;
}

.invoice-bottom{
background-color: #ffffff !important;;
padding: 40px 60px !important;;
position: relative !important;;
}

.task-table-wrapper{
margin-top: -13% !important;;
}
.task-table-wrapper .table > thead > tr> th{
border: none !important;;
color: #323149 !important;

padding-left: 0 !important;;
}
.task-table-wrapper .table> tbody> tr:first-child > td{
border-top: 0 !important;;
color: #323149 !important;

}
.task-table-wrapper .table> tbody> tr> td{
padding-top: 25px !important;;
color: #323149 !important;

padding-left: 0 !important;;
}
.task-table-wrapper .table> tbody> tr> td> h4{
margin-top: 0 !important;;
}
.task-table-wrapper .table tbody .desc{
width:60% !important;;
}
.desc h3{
margin-top: 0 !important;;
color: #323149 !important;

font-size: 20px !important;;
}
.desc h5{
font-weight: 400 !important;;
color: #323149 !important;

line-height: 1.4 !important;;
font-size: 14px !important;;
}
.right {
text-align: right !important;;
color: #323149 !important;

}
.invoice-bottom-total{
background-color: #fafafa !important;;
overflow: auto !important;;
margin-top: 50px !important;;
}
.invoice-bottom-total .no-padding{
padding-left: 0 !important;;
padding-right: 0 !important;;
}
.invoice-bottom-total .tax-box, .invoice-bottom-total .add-box, .invoice-bottom-total .sub-total-box{
display: inline-block !important;;
margin-right: 10px !important;;
padding: 10px !important;;
}
.invoice-bottom-total .total-box{
    background-color: #323149 !important;;
padding: 10px !important;;
}
.invoice-bottom-total .total-box h6{
margin-top: 0 !important;;
color: #ffffff !important;;
text-align: right !important;;
}
.invoice-bottom-total .total-box h3{
margin-bottom: 0 !important;;
color: #ffffff !important;;
text-align: right !important;;
}

.left {
display: inline !important;
text-align: left !important;
}

.center {
display: inline !important;
margin: 0 6.6rem !important;
text-align: center !important;
}

.rightText {
display: inline !important;
text-align: right !important;
}

.flex {
width: 100%!important;
margin: 0 auto !important;
color: #323149 !important;
}

.divider{
margin-top: 50px !important;;
    margin-bottom: 5px !important;;
}

.bottom-bar{
position: absolute !important;;
bottom: 0 !important;;
left: 0 !important;;
right: 0 !important;;
height: 26px !important;;
background-color: #323149 !important;;
}
      
        </style>
      
      
</head>
<body>

	<section class="back">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<div class="invoice-wrapper">
						<div class="invoice-top">
							<div class="row">
								<div class="col-sm-6">
									<div class="invoice-top-left">
										<h2>Margaret Brick</h2>
										<h4>Invoice № ${num++}</h4>
										<h6>Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}`}</h6>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="invoice-top-right">
										<h2>${customer}</h2>
										<h3>Hp Solutions</h3>
										<h5>Delhi, India</h5>
									</div>
								</div>
							</div>
						</div>
						<div class="invoice-bottom">
							<div class="row">
								<div class="col-xs-12">
									<div class="task-table-wrapper">
										<table class="table">
											<thead>
												<tr>
													<th>TASK DESCRIPTION</th>
													<th class="right">TOTAL</th>
												</tr>
											</thead>
											<tbody>
											${entries.map(([work, price]) => {
             return `
											<tr>
												<td class="desc">
												<h3>${work}:</h3>
												</td>
												<td><h4 class="right">${price}$</h4></td>
											</tr>
            `
        }
    )}
											</tbody>
										</table>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="col-md-12">
									<div class="invoice-bottom-total">
											<div class="total-box right">
												<h6>TOTAL</h6>
												<h3>${sumSalaries(workList)}$</h3>
											</div>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="col-xs-12">
									<hr class="divider">
								</div>
								<div class="flex">
									<h6 class="left">Margaret Brick</h6>
									<h6 class="center">margaret.brick@inbox.ru</h6>
									<h6 class="rightText">+7 77 7777777</h6>
								</div>
							</div>
							<div class="bottom-bar"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<!-- jquery slim version 3.2.1 minified -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g=" crossorigin="anonymous"></script>

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</body>
</html>
`;
};
