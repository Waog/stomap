/// <reference path="../../../app/ts/GithubApi/GithubLogin.ts" />
/// <reference path="../WaogTest.ts" />

module GithubApi {

    class UserLoginHandlerMock implements UserLoginHandler {
        handleUserLogin(login: GithubLogin) { console.error("method should be replaced by mock"); }
    }

    export class GithubLoginTest extends WaogTest.ClassTest {

        loginHandler: TeddyMocks.Stub<UserLoginHandler> = null;
        githubLogin: GithubLogin = null;

        beforeEach = () => {
            this.loginHandler = new TeddyMocks.Stub<UserLoginHandler>(UserLoginHandlerMock);
            this.githubLogin = new GithubLogin(this.loginHandler.object);
            this.loginHandler.stubs(m => m.handleUserLogin(this.githubLogin));
            expect(this.githubLogin).to.be.ok;
        }

        constructorTest = () => {
            it('should work properly',() => {
                expect(this.githubLogin).to.be.ok;
                expect(this.githubLogin).to.be.a.instanceOf(GithubLogin);
                expect(this.loginHandler.assertsThat(s => s.handleUserLogin(this.githubLogin)).wasCalledXTimes(0)).to.be.true;
            });
        }


        getHelloTest = () => {
            it('should work properly',() => {
                expect(this.githubLogin).to.be.ok;
                var helloGithub = this.githubLogin.getHello();
                expect(helloGithub).to.be.ok;
                expect(helloGithub.login).to.be.an.instanceOf(Function);
            });
        }
    }
}