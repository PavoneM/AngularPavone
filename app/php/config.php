<?
	// Define the receiver of the email
	
	define('TO_NAME','Manuel');
	define('TO_EMAIL','pavone.pro@gmail.com');

	define('TEMPLATE_PATH','template/mail.php');
    define('TEMPLATE_PATH_COMMENT','template/comment.php');

	define('SMTP_HOST','smtp.gmail.com');
	define('SMTP_USERNAME','pavone.pro@gmail.com');
	define('SMTP_PASSWORD','');

	define('SUBJECT','Email depuis www.manuelpavone.com');	
	
	// Error Messages
	define('MSG_INVALID_NAME','Remplir le champ Nom.');
	define('MSG_INVALID_EMAIL','Entrer une adresse mail valide.');
	define('MSG_INVALID_MESSAGE','Replir le champ Message.');
	define('MSG_SEND_ERROR','Désolé, nous n\'avons pas envoyé votre message.');

?>