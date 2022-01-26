import javax.swing.JFrame;
import javax.swing.JTextField;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import java.awt.Font;
import javax.swing.*;
import java.awt.Color;



public class GUI1{
   public static void main(String [] args) {
   
   //Set up GUI
   JFrame gui = new JFrame();
   gui.setTitle("First GUI");
   gui.setVisible(true);
   gui.setLayout(new GridBagLayout());
   gui.getContentPane().setBackground(Color.BLUE);
   
   //Text fields
   JTextField hello = null;
   hello = new JTextField();
   hello.setText("Hello world!");
   hello.setFont(new Font("Verdana", Font.PLAIN, 18));

   JTextField questionName = null;
   questionName = new JTextField();
   questionName.setText("What's your name?");
   questionName.setFont(new Font("Forte", Font.PLAIN, 14));

   JTextField userName = null;
   userName = new JTextField();
   userName.setText("______");

   //button
   JButton button = new JButton("Click Here");  
   button.setBounds(50,100,95,30);

   //Edit and add to GUI
   gui.add(hello);
   gui.add(questionName);
   gui.add(userName);
   gui.add(button);  
   hello.setEditable(false);
   questionName.setEditable(false);
   userName.setEditable(true);
   gui.pack();
   gui.setSize(400, 250);
   

   //Exit on close
   gui.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
   }
}