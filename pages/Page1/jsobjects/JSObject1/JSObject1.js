export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		const data = await appsmith.datasource.request("zendesk", "v2/search?query=ticket", {
			selectedCredentialsId: "0543f8f3-2361-427d-976f-9ddc321678c1"
		});
		return data.output
	}
}