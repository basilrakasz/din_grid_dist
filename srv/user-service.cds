@(path: '/user')
@(requires: 'authenticated-user')
service UserService {
     type userScopes {
          identified: Boolean;
          authenticated: Boolean;
          AssetAdmin: Boolean;
          AssetViewer: Boolean;
          AgentWorker: Boolean;
          AgentAdmin: Boolean;
     };

     type user { 
          user: String; 
          locale: String; 
          tenant: String; 
          scopes: userScopes; 
          firstName: String; 
          lastName: String; 
          email: String; 
     };

     function info() returns user;
}
