
To run the app:
1. Open the AGHtmlPreviewerApp folder
2. Open the AGHtmlPreviewerApp.sln via Visual studio 2019
3. Open the Package manager console to run script for the DB creation
4. From the Default project Drop Down Menu select AGDataAccessLibrary
5. Type "Update-Database"
	5.1 If there is an error try installing Microsoft.EntityFrameworkCore.Tools from NuGet and go back to 5.
6. Run app with IIS Express

_____________________

Additional conditions
_____________________

1. Some of the application's functionalitues are giving errors if it's being run with browsers 
Edge and Internet Explorer due to issues with the html-db-operator.service.ts
2. Tested ok for Chrome and Mozilla
3. When installing on other devises VS2019 sometimes gives IDE error TS1219, it's their own MS problem...