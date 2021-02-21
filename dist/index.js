var Fe=Object.create,V=Object.defineProperty,qe=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty,je=Object.getOwnPropertyNames,Ve=Object.getOwnPropertyDescriptor;var Ue=e=>V(e,"__esModule",{value:!0});var b=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports);var He=(e,t,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of je(t))!We.call(e,r)&&r!=="default"&&V(e,r,{get:()=>t[r],enumerable:!(i=Ve(t,r))||i.enumerable});return e},p=e=>e&&e.__esModule?e:He(Ue(V(e!=null?Fe(qe(e)):{},"default",{value:e,enumerable:!0})),e);var R=b(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});function Be(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}U.toCommandValue=Be});var K=b(A=>{"use strict";var Ge=A&&A.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(A,"__esModule",{value:!0});var Me=Ge(require("os")),Y=R();function z(e,t,i){let r=new X(e,t,i);process.stdout.write(r.toString()+Me.EOL)}A.issueCommand=z;function Le(e,t=""){z(e,{},t)}A.issue=Le;var J="::",X=class{constructor(t,i,r){t||(t="missing.command"),this.command=t,this.properties=i,this.message=r}toString(){let t=J+this.command;if(this.properties&&Object.keys(this.properties).length>0){t+=" ";let i=!0;for(let r in this.properties)if(this.properties.hasOwnProperty(r)){let s=this.properties[r];s&&(i?i=!1:t+=",",t+=`${r}=${Ye(s)}`)}}return t+=`${J}${Qe(this.message)}`,t}};function Qe(e){return Y.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function Ye(e){return Y.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});var te=b(P=>{"use strict";var Z=P&&P.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(P,"__esModule",{value:!0});var ee=Z(require("fs")),Xe=Z(require("os")),ze=R();function Je(e,t){let i=process.env[`GITHUB_${e}`];if(!i)throw new Error(`Unable to find environment variable for file command ${e}`);if(!ee.existsSync(i))throw new Error(`Missing file at path: ${i}`);ee.appendFileSync(i,`${ze.toCommandValue(t)}${Xe.EOL}`,{encoding:"utf8"})}P.issueCommand=Je});var C=b(d=>{"use strict";var Ke=d&&d.__awaiter||function(e,t,i,r){function s(o){return o instanceof i?o:new i(function(n){n(o)})}return new(i||(i=Promise))(function(o,n){function f(c){try{a(r.next(c))}catch(h){n(h)}}function m(c){try{a(r.throw(c))}catch(h){n(h)}}function a(c){c.done?o(c.value):s(c.value).then(f,m)}a((r=r.apply(e,t||[])).next())})},ie=d&&d.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(d,"__esModule",{value:!0});var g=K(),re=te(),Ze=R(),H=ie(require("os")),et=ie(require("path")),se;(function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"})(se=d.ExitCode||(d.ExitCode={}));function tt(e,t){let i=Ze.toCommandValue(t);if(process.env[e]=i,process.env.GITHUB_ENV||""){let s="_GitHubActionsFileCommandDelimeter_",o=`${e}<<${s}${H.EOL}${i}${H.EOL}${s}`;re.issueCommand("ENV",o)}else g.issueCommand("set-env",{name:e},i)}d.exportVariable=tt;function it(e){g.issueCommand("add-mask",{},e)}d.setSecret=it;function rt(e){process.env.GITHUB_PATH||""?re.issueCommand("PATH",e):g.issueCommand("add-path",{},e),process.env.PATH=`${e}${et.delimiter}${process.env.PATH}`}d.addPath=rt;function st(e,t){let i=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!i)throw new Error(`Input required and not supplied: ${e}`);return i.trim()}d.getInput=st;function ot(e,t){g.issueCommand("set-output",{name:e},t)}d.setOutput=ot;function nt(e){g.issue("echo",e?"on":"off")}d.setCommandEcho=nt;function ct(e){process.exitCode=se.Failure,oe(e)}d.setFailed=ct;function at(){return process.env.RUNNER_DEBUG==="1"}d.isDebug=at;function ut(e){g.issueCommand("debug",{},e)}d.debug=ut;function oe(e){g.issue("error",e instanceof Error?e.toString():e)}d.error=oe;function lt(e){g.issue("warning",e instanceof Error?e.toString():e)}d.warning=lt;function ft(e){process.stdout.write(e+H.EOL)}d.info=ft;function ne(e){g.issue("group",e)}d.startGroup=ne;function ce(){g.issue("endgroup")}d.endGroup=ce;function dt(e,t){return Ke(this,void 0,void 0,function*(){ne(e);let i;try{i=yield t()}finally{ce()}return i})}d.group=dt;function ht(e,t){g.issueCommand("save-state",{name:e},t)}d.saveState=ht;function mt(e){return process.env[`STATE_${e}`]||""}d.getState=mt});var B=b(u=>{"use strict";var D=u&&u.__awaiter||function(e,t,i,r){function s(o){return o instanceof i?o:new i(function(n){n(o)})}return new(i||(i=Promise))(function(o,n){function f(c){try{a(r.next(c))}catch(h){n(h)}}function m(c){try{a(r.throw(c))}catch(h){n(h)}}function a(c){c.done?o(c.value):s(c.value).then(f,m)}a((r=r.apply(e,t||[])).next())})},w;Object.defineProperty(u,"__esModule",{value:!0});var pt=require("assert"),yt=require("fs"),k=require("path");w=yt.promises,u.chmod=w.chmod,u.copyFile=w.copyFile,u.lstat=w.lstat,u.mkdir=w.mkdir,u.readdir=w.readdir,u.readlink=w.readlink,u.rename=w.rename,u.rmdir=w.rmdir,u.stat=w.stat,u.symlink=w.symlink,u.unlink=w.unlink;u.IS_WINDOWS=process.platform==="win32";function wt(e){return D(this,void 0,void 0,function*(){try{yield u.stat(e)}catch(t){if(t.code==="ENOENT")return!1;throw t}return!0})}u.exists=wt;function gt(e,t=!1){return D(this,void 0,void 0,function*(){return(t?yield u.stat(e):yield u.lstat(e)).isDirectory()})}u.isDirectory=gt;function vt(e){if(e=_t(e),!e)throw new Error('isRooted() parameter "p" cannot be empty');return u.IS_WINDOWS?e.startsWith("\\")||/^[A-Z]:/i.test(e):e.startsWith("/")}u.isRooted=vt;function ae(e,t=1e3,i=1){return D(this,void 0,void 0,function*(){if(pt.ok(e,"a path argument must be provided"),e=k.resolve(e),i>=t)return u.mkdir(e);try{yield u.mkdir(e);return}catch(r){switch(r.code){case"ENOENT":{yield ae(k.dirname(e),t,i+1),yield u.mkdir(e);return}default:{let s;try{s=yield u.stat(e)}catch(o){throw r}if(!s.isDirectory())throw r}}}})}u.mkdirP=ae;function xt(e,t){return D(this,void 0,void 0,function*(){let i;try{i=yield u.stat(e)}catch(s){s.code!=="ENOENT"&&console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${s}`)}if(i&&i.isFile()){if(u.IS_WINDOWS){let s=k.extname(e).toUpperCase();if(t.some(o=>o.toUpperCase()===s))return e}else if(ue(i))return e}let r=e;for(let s of t){e=r+s,i=void 0;try{i=yield u.stat(e)}catch(o){o.code!=="ENOENT"&&console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${o}`)}if(i&&i.isFile()){if(u.IS_WINDOWS){try{let o=k.dirname(e),n=k.basename(e).toUpperCase();for(let f of yield u.readdir(o))if(n===f.toUpperCase()){e=k.join(o,f);break}}catch(o){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${o}`)}return e}else if(ue(i))return e}}return""})}u.tryGetExecutablePath=xt;function _t(e){return e=e||"",u.IS_WINDOWS?(e=e.replace(/\//g,"\\"),e.replace(/\\\\+/g,"\\")):e.replace(/\/\/+/g,"/")}function ue(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}});var me=b(_=>{"use strict";var $=_&&_.__awaiter||function(e,t,i,r){function s(o){return o instanceof i?o:new i(function(n){n(o)})}return new(i||(i=Promise))(function(o,n){function f(c){try{a(r.next(c))}catch(h){n(h)}}function m(c){try{a(r.throw(c))}catch(h){n(h)}}function a(c){c.done?o(c.value):s(c.value).then(f,m)}a((r=r.apply(e,t||[])).next())})};Object.defineProperty(_,"__esModule",{value:!0});var bt=require("child_process"),v=require("path"),St=require("util"),l=B(),G=St.promisify(bt.exec);function Ct(e,t,i={}){return $(this,void 0,void 0,function*(){let{force:r,recursive:s}=Et(i),o=(yield l.exists(t))?yield l.stat(t):null;if(o&&o.isFile()&&!r)return;let n=o&&o.isDirectory()?v.join(t,v.basename(e)):t;if(!(yield l.exists(e)))throw new Error(`no such file or directory: ${e}`);if((yield l.stat(e)).isDirectory())if(s)yield le(e,n,0,r);else throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`);else{if(v.relative(e,n)==="")throw new Error(`'${n}' and '${e}' are the same file`);yield fe(e,n,r)}})}_.cp=Ct;function $t(e,t,i={}){return $(this,void 0,void 0,function*(){if(yield l.exists(t)){let r=!0;if((yield l.isDirectory(t))&&(t=v.join(t,v.basename(e)),r=yield l.exists(t)),r)if(i.force==null||i.force)yield de(t);else throw new Error("Destination already exists")}yield M(v.dirname(t)),yield l.rename(e,t)})}_.mv=$t;function de(e){return $(this,void 0,void 0,function*(){if(l.IS_WINDOWS){try{(yield l.isDirectory(e,!0))?yield G(`rd /s /q "${e}"`):yield G(`del /f /a "${e}"`)}catch(t){if(t.code!=="ENOENT")throw t}try{yield l.unlink(e)}catch(t){if(t.code!=="ENOENT")throw t}}else{let t=!1;try{t=yield l.isDirectory(e)}catch(i){if(i.code!=="ENOENT")throw i;return}t?yield G(`rm -rf "${e}"`):yield l.unlink(e)}})}_.rmRF=de;function M(e){return $(this,void 0,void 0,function*(){yield l.mkdirP(e)})}_.mkdirP=M;function he(e,t){return $(this,void 0,void 0,function*(){if(!e)throw new Error("parameter 'tool' is required");if(t&&!(yield he(e,!1)))throw l.IS_WINDOWS?new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`):new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);try{let i=[];if(l.IS_WINDOWS&&process.env.PATHEXT)for(let s of process.env.PATHEXT.split(v.delimiter))s&&i.push(s);if(l.isRooted(e)){let s=yield l.tryGetExecutablePath(e,i);return s||""}if(e.includes("/")||l.IS_WINDOWS&&e.includes("\\"))return"";let r=[];if(process.env.PATH)for(let s of process.env.PATH.split(v.delimiter))s&&r.push(s);for(let s of r){let o=yield l.tryGetExecutablePath(s+v.sep+e,i);if(o)return o}return""}catch(i){throw new Error(`which failed with message ${i.message}`)}})}_.which=he;function Et(e){let t=e.force==null?!0:e.force,i=Boolean(e.recursive);return{force:t,recursive:i}}function le(e,t,i,r){return $(this,void 0,void 0,function*(){if(i>=255)return;i++,yield M(t);let s=yield l.readdir(e);for(let o of s){let n=`${e}/${o}`,f=`${t}/${o}`;(yield l.lstat(n)).isDirectory()?yield le(n,f,i,r):yield fe(n,f,r)}yield l.chmod(t,(yield l.stat(e)).mode)})}function fe(e,t,i){return $(this,void 0,void 0,function*(){if((yield l.lstat(e)).isSymbolicLink()){try{yield l.lstat(t),yield l.unlink(t)}catch(s){s.code==="EPERM"&&(yield l.chmod(t,"0666"),yield l.unlink(t))}let r=yield l.readlink(e);yield l.symlink(r,t,l.IS_WINDOWS?"junction":null)}else(!(yield l.exists(t))||i)&&(yield l.copyFile(e,t))})}});var we=b(S=>{"use strict";var Ot=S&&S.__awaiter||function(e,t,i,r){function s(o){return o instanceof i?o:new i(function(n){n(o)})}return new(i||(i=Promise))(function(o,n){function f(c){try{a(r.next(c))}catch(h){n(h)}}function m(c){try{a(r.throw(c))}catch(h){n(h)}}function a(c){c.done?o(c.value):s(c.value).then(f,m)}a((r=r.apply(e,t||[])).next())})},N=S&&S.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(S,"__esModule",{value:!0});var F=N(require("os")),pe=N(require("events")),Tt=N(require("child_process")),At=N(require("path")),kt=N(me()),Nt=N(B()),q=process.platform==="win32",ye=class extends pe.EventEmitter{constructor(t,i,r){super();if(!t)throw new Error("Parameter 'toolPath' cannot be null or empty.");this.toolPath=t,this.args=i||[],this.options=r||{}}_debug(t){this.options.listeners&&this.options.listeners.debug&&this.options.listeners.debug(t)}_getCommandString(t,i){let r=this._getSpawnFileName(),s=this._getSpawnArgs(t),o=i?"":"[command]";if(q)if(this._isCmdFile()){o+=r;for(let n of s)o+=` ${n}`}else if(t.windowsVerbatimArguments){o+=`"${r}"`;for(let n of s)o+=` ${n}`}else{o+=this._windowsQuoteCmdArg(r);for(let n of s)o+=` ${this._windowsQuoteCmdArg(n)}`}else{o+=r;for(let n of s)o+=` ${n}`}return o}_processLineBuffer(t,i,r){try{let s=i+t.toString(),o=s.indexOf(F.EOL);for(;o>-1;){let n=s.substring(0,o);r(n),s=s.substring(o+F.EOL.length),o=s.indexOf(F.EOL)}i=s}catch(s){this._debug(`error processing line. Failed with error ${s}`)}}_getSpawnFileName(){return q&&this._isCmdFile()?process.env.COMSPEC||"cmd.exe":this.toolPath}_getSpawnArgs(t){if(q&&this._isCmdFile()){let i=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(let r of this.args)i+=" ",i+=t.windowsVerbatimArguments?r:this._windowsQuoteCmdArg(r);return i+='"',[i]}return this.args}_endsWith(t,i){return t.endsWith(i)}_isCmdFile(){let t=this.toolPath.toUpperCase();return this._endsWith(t,".CMD")||this._endsWith(t,".BAT")}_windowsQuoteCmdArg(t){if(!this._isCmdFile())return this._uvQuoteCmdArg(t);if(!t)return'""';let i=[" ","	","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'],r=!1;for(let n of t)if(i.some(f=>f===n)){r=!0;break}if(!r)return t;let s='"',o=!0;for(let n=t.length;n>0;n--)s+=t[n-1],o&&t[n-1]==="\\"?s+="\\":t[n-1]==='"'?(o=!0,s+='"'):o=!1;return s+='"',s.split("").reverse().join("")}_uvQuoteCmdArg(t){if(!t)return'""';if(!t.includes(" ")&&!t.includes("	")&&!t.includes('"'))return t;if(!t.includes('"')&&!t.includes("\\"))return`"${t}"`;let i='"',r=!0;for(let s=t.length;s>0;s--)i+=t[s-1],r&&t[s-1]==="\\"?i+="\\":t[s-1]==='"'?(r=!0,i+="\\"):r=!1;return i+='"',i.split("").reverse().join("")}_cloneExecOptions(t){t=t||{};let i={cwd:t.cwd||process.cwd(),env:t.env||process.env,silent:t.silent||!1,windowsVerbatimArguments:t.windowsVerbatimArguments||!1,failOnStdErr:t.failOnStdErr||!1,ignoreReturnCode:t.ignoreReturnCode||!1,delay:t.delay||1e4};return i.outStream=t.outStream||process.stdout,i.errStream=t.errStream||process.stderr,i}_getSpawnOptions(t,i){t=t||{};let r={};return r.cwd=t.cwd,r.env=t.env,r.windowsVerbatimArguments=t.windowsVerbatimArguments||this._isCmdFile(),t.windowsVerbatimArguments&&(r.argv0=`"${i}"`),r}exec(){return Ot(this,void 0,void 0,function*(){return!Nt.isRooted(this.toolPath)&&(this.toolPath.includes("/")||q&&this.toolPath.includes("\\"))&&(this.toolPath=At.resolve(process.cwd(),this.options.cwd||process.cwd(),this.toolPath)),this.toolPath=yield kt.which(this.toolPath,!0),new Promise((t,i)=>{this._debug(`exec tool: ${this.toolPath}`),this._debug("arguments:");for(let a of this.args)this._debug(`   ${a}`);let r=this._cloneExecOptions(this.options);!r.silent&&r.outStream&&r.outStream.write(this._getCommandString(r)+F.EOL);let s=new W(r,this.toolPath);s.on("debug",a=>{this._debug(a)});let o=this._getSpawnFileName(),n=Tt.spawn(o,this._getSpawnArgs(r),this._getSpawnOptions(this.options,o)),f="";n.stdout&&n.stdout.on("data",a=>{this.options.listeners&&this.options.listeners.stdout&&this.options.listeners.stdout(a),!r.silent&&r.outStream&&r.outStream.write(a),this._processLineBuffer(a,f,c=>{this.options.listeners&&this.options.listeners.stdline&&this.options.listeners.stdline(c)})});let m="";if(n.stderr&&n.stderr.on("data",a=>{s.processStderr=!0,this.options.listeners&&this.options.listeners.stderr&&this.options.listeners.stderr(a),!r.silent&&r.errStream&&r.outStream&&(r.failOnStdErr?r.errStream:r.outStream).write(a),this._processLineBuffer(a,m,c=>{this.options.listeners&&this.options.listeners.errline&&this.options.listeners.errline(c)})}),n.on("error",a=>{s.processError=a.message,s.processExited=!0,s.processClosed=!0,s.CheckComplete()}),n.on("exit",a=>{s.processExitCode=a,s.processExited=!0,this._debug(`Exit code ${a} received from tool '${this.toolPath}'`),s.CheckComplete()}),n.on("close",a=>{s.processExitCode=a,s.processExited=!0,s.processClosed=!0,this._debug(`STDIO streams have closed for tool '${this.toolPath}'`),s.CheckComplete()}),s.on("done",(a,c)=>{f.length>0&&this.emit("stdline",f),m.length>0&&this.emit("errline",m),n.removeAllListeners(),a?i(a):t(c)}),this.options.input){if(!n.stdin)throw new Error("child process missing stdin");n.stdin.end(this.options.input)}})})}};S.ToolRunner=ye;function It(e){let t=[],i=!1,r=!1,s="";function o(n){r&&n!=='"'&&(s+="\\"),s+=n,r=!1}for(let n=0;n<e.length;n++){let f=e.charAt(n);if(f==='"'){r?o(f):i=!i;continue}if(f==="\\"&&r){o(f);continue}if(f==="\\"&&i){r=!0;continue}if(f===" "&&!i){s.length>0&&(t.push(s),s="");continue}o(f)}return s.length>0&&t.push(s.trim()),t}S.argStringToArray=It;var W=class extends pe.EventEmitter{constructor(t,i){super();if(this.processClosed=!1,this.processError="",this.processExitCode=0,this.processExited=!1,this.processStderr=!1,this.delay=1e4,this.done=!1,this.timeout=null,!i)throw new Error("toolPath must not be empty");this.options=t,this.toolPath=i,t.delay&&(this.delay=t.delay)}CheckComplete(){this.done||(this.processClosed?this._setResult():this.processExited&&(this.timeout=setTimeout(W.HandleTimeout,this.delay,this)))}_debug(t){this.emit("debug",t)}_setResult(){let t;this.processExited&&(this.processError?t=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`):this.processExitCode!==0&&!this.options.ignoreReturnCode?t=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`):this.processStderr&&this.options.failOnStdErr&&(t=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`))),this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.done=!0,this.emit("done",t,this.processExitCode)}static HandleTimeout(t){if(!t.done){if(!t.processClosed&&t.processExited){let i=`The STDIO streams did not close within ${t.delay/1e3} seconds of the exit event from process '${t.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;t._debug(i)}t._setResult()}}}});var T=b(O=>{"use strict";var Pt=O&&O.__awaiter||function(e,t,i,r){function s(o){return o instanceof i?o:new i(function(n){n(o)})}return new(i||(i=Promise))(function(o,n){function f(c){try{a(r.next(c))}catch(h){n(h)}}function m(c){try{a(r.throw(c))}catch(h){n(h)}}function a(c){c.done?o(c.value):s(c.value).then(f,m)}a((r=r.apply(e,t||[])).next())})},Rt=O&&O.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(O,"__esModule",{value:!0});var ge=Rt(we());function Dt(e,t,i){return Pt(this,void 0,void 0,function*(){let r=ge.argStringToArray(e);if(r.length===0)throw new Error("Parameter 'commandLine' cannot be null or empty.");let s=r[0];return t=r.slice(1).concat(t||[]),new ge.ToolRunner(s,t,i).exec()})}O.exec=Dt});var y=p(C()),Q=p(T());var be=p(C()),I=p(T());var _e=p(T()),L=p(require("fs")),j=async(e,t)=>{let i="";return await _e.exec(e,t,{listeners:{stdout:r=>{i+=r.toString()}}}),i},ve=()=>{let e=["action.yml","dist/index.js","README.md"],t={};return e.map(i=>{t[i]=L.default.readFileSync(i).toString()}),t},xe=e=>{Object.keys(e).map(t=>{L.default.writeFileSync(t,e[t])})};var Se=()=>be.getInput("target-branch"),Ee=async()=>(await j("git rev-parse --abbrev-ref HEAD")).trim(),Ce=async()=>{let e="github-actions[bot]",t="41898282+github-actions[bot]@users.noreply.github.com",i=`https://${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`;await I.exec("git config",["user.name",e]),await I.exec("git config",["user.email",t]),await I.exec(`git remote set-url origin ${i}`)},$e=async()=>{await I.exec("git config --unset user.name"),await I.exec("git config --unset user.email")};var E=p(C()),x=p(T());var Ft=async({targetBranch:e})=>{try{await x.exec(`git fetch origin ${e}`)}catch(t){E.debug(`${e} doesn't exists in remote repository`)}try{await x.exec(`git checkout ${e}`)}catch(t){await x.exec(`git checkout --orphan ${e}`)}},qt=async()=>{let e=["action.yml","dist/index.js","README.md"];await x.exec("git reset"),await x.exec("git add -f",e)},Oe=async({version:e,targetBranch:t})=>{let i=await Ee();E.debug("Backup files");let r=ve();E.debug("Checkout to target branch"),await Ft({targetBranch:t}),E.debug("Add files"),xe(r),await qt(),E.debug("Commit"),await x.exec("git commit --no-verify --allow-empty",[`-m "${e}"`]),E.debug("Push"),await x.exec(`git push origin ${t}`),E.debug("Checkout to previous branch"),await x.exec(`git checkout -f ${i}`)};var Te=p(C()),Ae=p(T());var ke=async({version:e})=>{Ae.exec("git status")};var Ne=p(C());var Ie=async()=>{let t=`v${(await j("npm -s run env echo",["$npm_package_version"])).trim()}`;return Ne.debug(`Version found: ${t}`),t};var Pe=p(C()),Re=p(T()),De=async()=>{Pe.debug("Installing yarn"),await Re.exec("npm install --global yarn")};var Wt=async()=>{try{y.info("Setting up environment"),await Ce(),await De();let e=await Ie(),t=Se();y.info("Prepare action");let i=y.getInput("prepare-command");await Q.exec(i),y.info("Build action");let r=y.getInput("build-command");await Q.exec(r),y.info("Create Commit"),await Oe({version:e,targetBranch:t}),y.info("Create Release"),await ke({version:e})}catch(e){y.setFailed(`Action failed for uncaught error: ${e}`)}try{y.info("Clean up"),await $e()}catch(e){y.setFailed(`Cleaning failed for uncaught error: ${e}`)}};Wt();
