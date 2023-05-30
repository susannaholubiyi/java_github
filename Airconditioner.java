public class AirCondiioner {

	private boolean isOn;

	private String productName;

	private int temperature;

     public AirConditioner (boolean isOn, String productName, int temperature) {
     		this.isOn = false;
     		this.productName = productName;
     		this.temperature = 20;
}
	public void decreaseTemperature() {
		if(isOn && temperature > 0);
		temperature++;
}
	public string getProductName() {
		return productName;
} 
	public int getTemperature() {
		return temperature;
}
	public void increaseTemperature() {
		if (isOn && temperature > 30);
		temperature--;
}
	public boolean isOn() {
		return isOn;
}
	public void setisOn(boolean isOn) {
		this.isOn = isOn;
}
	public void setProductName(String productName){
		this.productName = productName;
}
	public void setTemperature(int temperature){
		this.temperature = temperature;
}

}















}
