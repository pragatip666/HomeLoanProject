import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public customerName;
  public loanDeatilsId;
  public loanInterest;
  public issueDate;
  public duration;
  public penalty;
  

  public personalDetailsId;
	public dateOfBirth;
	public customerId;
	public phoneNo;
	public gender;
	public nationality;
	public aadharNo;
	public panNo;
	public detailsId;
	public typeOfEmployment;
	public income;
	public organizationType;
	public organizationName;
	public employeeName;
	
	public propertyId;
	public loanId;
	public propertyName;
	public estimatedAmount;
    public propertyLocation;
    public adminId;

    public getpersonalDetailsId(){
        return this.personalDetailsId;
    }
    public setpersonalDetailsId(Id){
        this.personalDetailsId=Id;
    }
    public getdateOfBirth(){
        return this.dateOfBirth;
    }
    public setdateOfBirth(dateOfBirth){
        this.dateOfBirth=dateOfBirth;
    }

    public getcustomerId(){
        return this.customerId;

    }
    public setcustomerId(customerId){
        this.customerId= customerId;
    }
    public getphoneNo(){
        return this.phoneNo;
    }
    public setphoneNo(phoneNo){
        this.phoneNo=phoneNo;
    }
    public getgender(){
        return this.gender;
    }
    public setgender(gender){
        this.gender=gender;
    }
    public getnationality(){
        return this.nationality;
    }
    public setnationality(nationality){
        this.nationality=nationality;
    }
    public getaadharNo(){
        return this.aadharNo;
    }
    public setaadharNo(aadharNo){
        this.aadharNo=aadharNo;
    }
    public getpanNo(){
        return this.panNo;
    }
    public setpanNo(panNo){
        this.panNo=panNo;
    }
    public getdetailsId(){
        return this.detailsId;
    }
    public setdetailsId(detailsId){
        this.detailsId=detailsId;
    }
	public gettypeOfEmployment(){
        return this.typeOfEmployment;
    }
    public settypeOfEmployment(typeOfEmployment){
        this.typeOfEmployment=typeOfEmployment;
    }

    public getincome(){
        return this.income;
    }
    public setincome(income){
        this.income=income;
    }
    public getorganizationType(){
        return this.organizationType;
    }
    public setorganizationType(organizationType){
        this.organizationType=organizationType;
    }
    public getorganizationName(){
        return this.organizationName;
    }
    public setorganizationName(organizationName){
        this.organizationName=organizationName;
    }
    public getemployeeName(){
        return this.employeeName;
    }
    public setemployeeName(employeeName){
        this.employeeName=employeeName;
    }
    public getpropertyId(){
        return this.propertyId;
    }
    public setpropertyId(propertyId){
        this.propertyId=propertyId;
    }
    public getloanId(){
        return this.loanId;
    }
    public setloanId(loanId){
        this.loanId=loanId;
    }

    public getpropertyName(){
        return this.propertyName;
    }
    public setpropertyName(propertyName){
        this.propertyName=propertyName;
    }

    public getestimatedAmount(){
        return this.estimatedAmount;
    }
    public setestimatedAmount(estimatedAmount){
        this.estimatedAmount=estimatedAmount;
    }
    public getpropertyLocation(){
        return this.propertyLocation;
    }
    public setpropertyLocation(propertyLocation){
        this.propertyLocation=propertyLocation;
    }
    public getadminId(){
        return this.adminId;
    }
    public setadminId(adminId){
        this.adminId=adminId;
    }
    public getcustomerName(){
      return this.customerName;
    }
    public setcustomerName(customerName){
      this.customerName=this.customerName;
    }
    public getloanDeatilsId(){
      return this.loanDeatilsId;
    }
    public setloanDeatilsId(loanDeatilsId){
      this.loanDeatilsId=loanDeatilsId;
    }
    public getloanInterest(){
      return this.loanInterest;
    }
    public setloanInterest(loanInterest){
      this.loanInterest=loanInterest;
    }
    public getissueDate(){
      return this.issueDate;
    }
    public setissueDate(issueDate){
      this.issueDate=issueDate;
    }

    public getduration(){
      return this.duration;
    }
    public setduration(duration){
      this.duration=duration;
    }
    public getpenalty(){
      return this.penalty;
    }
    public setpenalty(penalty){
      this.penalty=penalty;
    }
}
