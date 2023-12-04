import java.util.Scanner;

public class Nokia{

  public static void main(String[] args){
  
    Scanner input;
    input = new Scanner(System.in);
    
      
     System.out.println("Welcome to Nokia 3310\n ");
        
   
     
     System.out.print("\n1. Phone book\n2. Messages\n3. Chat\n4. Call Register\n5. Tones");
     System.out.print("\n6. Settings\n7. Call Divert\n8. Games\n9. Calculator\n10. Reminders");
     System.out.print("\n11. Clock\n12. Profiles\n13. SIM services\n");
     
     
     System.out.print("\nEnter from 1-13 to browse through the menu: ");
     int menu = input.nextInt();
     
     
       if (menu == 1){
       
           System.out.print("\n          Phone book          \n1. Search\n2. Service Nos");
           System.out.print("\n3.Add Name\n4. Erase\n5. Edit\n6. Assign tone\n7. Send B' Card");
           System.out.print("\n8. Options\n9. Speed Dials\n10. Voice Tags\n");
           
           System.out.print("\nEnter any number  from 1-10 to browse through phone book: ");
           int browsePhoneBook = input.nextInt(); 
           
             if (browsePhoneBook == 1) {
                 
                 System.out.print("\"Search\"\n");
                  
               
             
             }
             
             if (browsePhoneBook == 2){
             System.out.print("\"Service Nos\"\n");
             }
            
             if  (browsePhoneBook == 3){
             System.out.print("\"Add name\"\n");
             }
             
             if (browsePhoneBook == 4){
             System.out.print("\"Erase\"");
             }
             
             if (browsePhoneBook == 5){
             System.out.print("\"Edit\"");
             }
             
             if (browsePhoneBook == 6){
             System.out.print("\"Assign tone\"");
             }
             
             if (browsePhoneBook == 7){
             System.out.print("\"Send B' Card\"");
             }
             
             if (browsePhoneBook == 8){
             System.out.print("\n1. Type of view\n2. Memory status\n");
             System.out.print("\nEnter 1 or 2 to select options: ");
             int phoneBookOption = input.nextInt();
             
             		if (phoneBookOption == 1){
             		System.out.print("\"Type of view\"");
             		}
             		
             		if (phoneBookOption == 2){
             		System.out.print("\"Memory status\"");
             		}
             		
             }
             
             if (browsePhoneBook == 9){
             System.out.print("\"Speed Dials\"");
             }
             
             if (browsePhoneBook == 10){
             System.out.print("\"Voice tags\"");
             }

}



        if (menu == 2){
         System.out.print("\n          Messages           \n1. Write messages\n 2. Inbox");
         System.out.print("\n3. Outbox\n4. Picture messages\n5. Templates\n6. Smileys");
         System.out.print("\n7. Message settings\n8. Info service\n9. Voice mailbox number");
         System.out.print("\n10. Service command editor");
         
        

	     
	     System.out.print("\nEnter any number from 1-10 to browse through messages: ");
	     int browseMessage = input.nextInt();
	     
	     
	     
	     if(browseMessage == 1){
	     System.out.print("\"Write messages\"");
	     }
	     
	     if (browseMessage == 2){
	     System.out.print("\"Inbox\"");
	     }
	     
	     if (browseMessage == 3){
	     System.out.print("\"Outbox\"");
	     }
	     
	     if (browseMessage == 4){
	     System.out.print("\"Picture messages\"");
	     }
	     
	     if (browseMessage == 5){
	     System.out.print("\"Templates\"");
	     }
	     
	     if (browseMessage == 6){
	     System.out.print("\"Smileys\"");
	     }
	     
	     if (browseMessage == 7){
	     System.out.print("\n1. Set 1\n2. Common");
	     System.out.print("\nSelect 1 or 2 to view settings: ");
	     int messageSettings = input.nextInt();
	     
	     		if (messageSettings == 1){
	     		System.out.print("\n1. Message centre number\n2. Messages sent as\n3. Message validity");
	     		
	     		System.out.print("\nEnter any number from 1-3 to select an option: ");
	     		int messageSettingOption1 = input.nextInt();
	     		
	     				if( messageSettingOption1 ==1){
	     				System.out.print("\"Message centre number\"");
	     				}
	     				
	     				if (messageSettingOption1 == 2){
	     				System.out.print("\"Message sent as\"");
	     				}
	     				
	     				if (messageSettingOption1 == 3){
	     				System.out.print("\"Message validity\"");
	     				}
	     		}
	     		
	     		if (messageSettings == 2){
	     		System.out.print("\n1. Delivery reports\n2. Reply via same centre\n3. Character support");
	     		
	     		System.out.print("\nEnter any number from 1-3 to select an option: ");	  
		        int messageSettingOption2 = input.nextInt(); 
		        
		     				if( messageSettingOption2 ==1){	            		   		
	     		                        System.out.print("\"Delivery reports\"");
	     		                        }
	     		                        
	     		                        if(messageSettingOption2 ==2){
	     		                        System.out.print("\"Reply via same centre\"");
	     		                        }
	     		                        
	     		                        if(messageSettingOption2 ==3){
	     		                        System.out.print("\"Character support\"");
	     		                        }
	     		}
	     
	     }
	     
	     if (browseMessage == 8){
	     System.out.print("\"Info service\"");
	     }
	     
	     if (browseMessage == 9){
	     System.out.print("\"Voice mailbox number\"");
	     }
	     
             if (browseMessage == 10){
	     System.out.print("\"Service command editor\"");
	     }
	   
	   
	     
	} //else System.out.print("Error!");   
	 
	 
	 if (menu == 3){
	 
	 System.out.print("\"Chats\""); 
	 
	 }
	 
	 
	 
	 if (menu == 4){
	 
	 System.out.print("\n          Call Register          \n1. Missed calls\n2. Received calls");
	 System.out.print("\n3. Dialled numbers\n4. Erase recent call lists\n5. Show call duration");
	 System.out.print("\n6. Show call cost\n7. Call cost settings\n8. Prapaid credit");
	 
	 System.out.print("\nEnter any number from 1-8 to browse through call register: ");
	 int browseCallRegister = input.nextInt();
	 
	 
	 
             if (browseCallRegister == 1){
             System.out.print("\"Missed calls\"");
             }
             
             if (browseCallRegister == 2){
             System.out.print("\"Received calls\"");
             }
             
             if (browseCallRegister == 3){
             System.out.print("\"Dialled numbers\"");
             }
             
             if (browseCallRegister == 4){
             System.out.print("\"Erase recent call lists\"");
             }
             
             if (browseCallRegister == 5){
             System.out.print("\n1. Last call duration\n2. All calls' duration\n3. Received calls' duration");
             System.out.print("\n4. Dialled calls' duration\n5. Clear timers ");
             
             System.out.print("\nEnter any number from 1-5 to select an option: ");
             int callRegisterOption = input.nextInt();	
             
             		if ( callRegisterOption ==1){
             		System.out.print("\"Last call duration\""); 
             		}
               		if ( callRegisterOption ==2){    
               		System.out.print("\"All calls' duration\""); 
               		}
               		
             		if ( callRegisterOption ==3){    
             		System.out.print("\"Received calls' duration\"");  
             		}
             		
             		if ( callRegisterOption ==4){     
             		System.out.print("\"Dialled calls' duration\"");  
             		}
             		
             		if ( callRegisterOption ==5){  
             		System.out.print("\"Clear timers\"");   
             		}        		      		         		      		
             		
             }
             
             if (browseCallRegister == 6){
             System.out.print("\n1. Last call cost\n2. All calls' cost\n3. Clear counters"); 
             }
             
             if (browseCallRegister == 7){
             System.out.print("\n1. Call cost limit\n2. Show costs in");
             }
             
             if (browseCallRegister == 8){
             System.out.print("\"Prepaid credit\"");
             }
                 
	 
	 
	 }
	  
	 if (menu ==5 ){
	 
	 System.out.print("\n          Tones           \n1. Ringing tone\n2. Ringing volume");
	 System.out.print("\n3. Incoming call alert\n4. Composer\n5. Message alert tone\n6. Keypad tones");
	 System.out.print("\n7. Warning and game tones\n8. Vibrating alert\n9. Screen saver");
	 
	 System.out.print("\nEnter any number from 1-9 to browse through Tones: ");
	 int browseTones = input.nextInt();
	 
	 
	 
             if (browseTones == 1){
             System.out.print("\"Ringing tone\"");
             }
             
             if (browseTones == 2){
             System.out.print("\"Ringing volume\"");
             }
             
             if (browseTones == 3){
             System.out.print("\"Incoming call alert\"");
             }
             
             if (browseTones == 4){
             System.out.print("\"Composer\"");
             }
             
             if (browseTones == 5){
             System.out.print("\"Message alert tone\"");
             }
             
             if (browseTones == 6){
             System.out.print("\"Keypad tones\"");
             }
             
             if (browseTones == 7){
             System.out.print("\"Warning ang game tones\"");
             }
             
             if (browseTones == 8){
             System.out.print("\"Vibrating alerts\"");
             }
             
             if (browseTones == 9){
             System.out.print("\"Screen saver\"");
             }
             
          
	 	 
	 }//else System.out.print("Error!");
	 
	 if (menu == 6){
	 
	 System.out.print("\n          Settings          \n1. Call settings\n2. Phone settings");
	 System.out.print("\n3. Security settings\n4. Restore factory settings");
	 
	 System.out.print("\nEnter any number from 1-4 to browse through settings: ");
	 int browseSetting = input.nextInt();
	 
	 
             if (browseSetting == 1){
             System.out.print("\n1. Automatic re-dial\n2. Speed dialling\n3. Call waiting options");
             System.out.print("\n4. Own number Sending\n5. Phone line in use\n6. Automatic answer");
             
             System.out.print("\nEnter any number from 1-6 to select an option: ");
             int browseSettingOption1 = input.nextInt();
             
             		if(browseSettingOption1 ==1){
             		System.out.print("\"Automatic re-dial\"");
             		}
             		
              		if(browseSettingOption1 ==2){  
              		System.out.print("\"Speed dialling\"");
              		}
              		
             		if(browseSettingOption1 ==3){  
             		System.out.print("\"Call waiting options\""); 
             		}
             		
             		if(browseSettingOption1 ==4){
             		System.out.print("\"Own number Sending\"");   
             		}
             		
             		if(browseSettingOption1 ==5){ 
             		System.out.print("\"Phone line in use\"");
             		}
             		
             		if(browseSettingOption1 ==6){  
             		System.out.print("\"Automatic answer\""); 
             		}          			
             			
             
             }
             
             if (browseSetting == 2){
             System.out.print("\n1. Language\n2. Cell info display\n3. Welcome note");
             System.out.print("\n4. Network selection\n5. Lights\n6. Confirm SIM service actions");
             
             System.out.print("\nEnter any number from 1-6 to select an option: ");
             int browseSettingOption2 = input.nextInt();
             
             		if(browseSettingOption2 ==1){
             		System.out.print("\"Language\"");
             		}
             		
              		if(browseSettingOption2 ==2){  
              		System.out.print("\"Cell info display\"");
              		}
              		
             		if(browseSettingOption2 ==3){  
             		System.out.print("\"Welcome note\""); 
             		}
             		
             		if(browseSettingOption2 ==4){
             		System.out.print("\"Network selection\"");   
             		}		
 
             		if(browseSettingOption2 ==5){  
             		System.out.print("\"Lights\""); 
             		}
             		
             		if(browseSettingOption2 ==6){
             		System.out.print("\"Confirm SIM service actions\"");   
             		}		
            
             }
             
             if (browseSetting == 3){
             System.out.print("\n1. Pin code request\n2. Call barring service\n3. Fixed dialling");
             System.out.print("\n4. Closed user group\n5. Phone security\n6. Change access codes");
             
             System.out.print("\nEnter any number from 1-6 to select an option: ");
             int browseSettingOption3 = input.nextInt();
             
             		if(browseSettingOption3 ==1){
             		System.out.print("\"Pin code request\"");
             		}
             		
              		if(browseSettingOption3 ==2){  
              		System.out.print("\"Call barring service\"");
              		}
              		
             		if(browseSettingOption3 ==3){  
             		System.out.print("\"Fixed dialling\""); 
             		}
             		
             		if(browseSettingOption3 ==4){
             		System.out.print("\"Closed user group\"");   
             		}		
 
             		if(browseSettingOption3 ==5){  
             		System.out.print("\"Phone security\""); 
             		}
             		
             		if(browseSettingOption3 ==6){
             		System.out.print("\"Change access codes\"");   
             		}		
             
             }
             
             if (browseSetting == 4){
             System.out.print("\"Restore factory settings\"");
             }
	 
	 }
	 
	 
	 if (menu == 7){
	 System.out.print("\"Call divert\"");
	 }
	 
	 
	 if (menu == 8){
	 System.out.print("\"Games\"");
	 }
	 
	 
	 if (menu == 9){
	 System.out.print("\"Calculator\"");
	 }
	 
	 
	 if (menu == 10){
	 System.out.print("\"Reminders\"");
	 }
	 
	 if (menu == 11){
	 System.out.print("\n          Clock          \n1. Alarm clock\n2. Clock settings");
	 System.out.print("\n3. Date setting\n4. Stopwatch\n5. Countdown timer");
	 System.out.print("\n6. Auto update of date and time");
	 System.out.print("\nEnter any number from 1-6 to browse through clock menu: ");
	 int browseClock = input.nextInt();
	 
	 
	 
             if (browseClock == 1){
             System.out.print("\"Alarm clock\"");
             }
             
             if (browseClock == 2){
             System.out.print("\"Clock settings\"");
             }
             
             if (browseClock == 3){
             System.out.print("\"Date settings\"");
             }
             
             if (browseClock == 4){
             System.out.print("\"Stopwatch\"");
             }
             
             if (browseClock == 5){
             System.out.print("\"Countdown timer\"");
             }
             
             if (browseClock == 6){
             System.out.print("\"Auto update of time and date\"");
             }
             
          }
          
          
          if (menu ==12){
          System.out.print("\"Profiles\"");
          }
          
          
          if (menu == 13){
          System.out.print("\"SIM services\"");
          }
	 
	     
  }
}
