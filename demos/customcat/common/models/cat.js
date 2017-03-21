module.exports = function(Cat) {

	Cat.afterRemote('find', function(ctx,instance,next) {
		if(ctx.result) {
			ctx.result.forEach(function(cat) {
				if(cat.friendly) cat.name = "Friendly " + cat.name;
			});
		} 
		next();
	});

	/* Ray, explain this if you have time...
	Cat.friendly = function(cb) {
		Cat.find({where:{friendly:true}}, function(err, res) {
			resNew = res.map(function(cat) {
				var bareCat = {
					name:cat.name,
					age:cat.age,
					gender:cat.gender
				}
				return bareCat;
			});
			cb(err, resNew);
		});
	};
	*/
	
	Cat.friendly = function(cb) {
		Cat.find({where:{friendly:true}},function(err, res) {
			cb(err, res);
		});
	};	
	Cat.remoteMethod('friendly', {
		http:{verb:'get',path:'/friendly'},
		returns:{root:true,type:'array'}
	});

	Cat.validatesInclusionOf('gender', {'in':['male','female']});
	Cat.validatesNumericalityOf('age', {int:true});
	Cat.validate('age', function(err) {
		if(this.age <= 0) err();
	}, {message:'Must be positive'});
};
