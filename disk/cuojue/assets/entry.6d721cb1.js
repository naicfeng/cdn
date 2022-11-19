import{bx as s}from"./index.675162b4.js";const r="Backup",n="Restore",i="Start backup",a="Finish backup",d="[ {{item}} ] Backup was successful",c="[ {{item}} ] Backup failed",l="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",m={backup:r,restore:n,start_backup:i,finish_backup:a,success_backup_item:d,failed_backup_item:c,no_file:l,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h},f={order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",root_folder_id:"Root folder id",refresh_token:"Refresh token",order_by:"Order by",order_bys:{name:"Name",size:"Size",updated_at:"Updated at",created_at:"Created at"},order_direction:"Order direction"},g={order_bys:{name:"Name",time:"Time",size:"Size"},download_apis:{official:"Official",crack:"Crack"},refresh_token:"Refresh token",root_folder_path:"Root folder path",order_directions:{asc:"Asc",desc:"Desc"},download_api:"Download api",client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_direction:"Order direction"},y={share_password:"Share password",baseUrl:"BaseUrl",shareUrl:"ShareUrl",type:"Type",types:{cookie:"Cookie",url:"Url"},cookie:"Cookie","cookie-tips":"about 15 days valid",root_folder_id:"Root folder id"},k={refresh_token:"Refresh token",share_id:"Share id",share_pwd:"Share pwd",root_folder_id:"Root folder id",order_by:"Order by",order_bys:{updated_at:"Updated at",created_at:"Created at",name:"Name",size:"Size"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"}},w={"order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",chunk_size:"Chunk size",order_by:"Order by",refresh_token:"Refresh token",order_directions:{desc:"Desc",asc:"Asc"},client_id:"Client id",client_secret:"Client secret","chunk_size-tips":"chunk size while uploading (unit: MB)",root_folder_id:"Root folder id"},b={list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},root_folder_path:"Root folder path",bucket:"Bucket",region:"Region",access_key_id:"Access key id",secret_access_key:"Secret access key",sign_url_expire:"Sign url expire",endpoint:"Endpoint",custom_host:"Custom host",placeholder:"Placeholder",force_path_style:"Force path style"},v={client_id:"Client id",client_secret:"Client secret",show_archive:"Show archive",root_folder_id:"Root folder id",refresh_token:"Refresh token"},C={root_folder_path:"Root folder path",address:"Address",username:"Username",password:"Password",share_name:"Share name"},S={"timestamp-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",use_video_url:"Use video url",refresh_token:"Refresh token",captcha_sign:"Captcha sign","username-tips":"login type is user,this is required",password:"Password","refresh_token-tips":"login type is refresh_token,this is required",client_secret:"Client secret",client_version:"Client version",package_name:"Package name",root_folder_id:"Root folder id",sign_type:"Sign type",user_agent:"User agent","algorithms-tips":"sign type is algorithms,this is required","captcha_sign-tips":"sign type is captcha_sign,this is required",timestamp:"Timestamp",device_id:"Device id",download_user_agent:"Download user agent",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},algorithms:"Algorithms",username:"Username","password-tips":"login type is user,this is required",login_type:"Login type",login_types:{user:"User",refresh_token:"Refresh token"}},P={order_bys:{fileName:"FileName",fileSize:"FileSize",updated:"Updated",created:"Created"},order_directions:{Asc:"Asc",Desc:"Desc"},region:"Region",regions:{china:"China",international:"International"},cookie:"Cookie",order_direction:"Order direction",project_id:"Project id",root_folder_id:"Root folder id",order_by:"Order by"},R={refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"},album_id:"Album id",client_id:"Client id",client_secret:"Client secret"},A={password:"Password",root_folder_path:"Root folder path",address:"Address",username:"Username"},x={order_by:"Order by",order_bys:{updated_at:"Updated at",none:"None",file_type:"File type",file_name:"File name"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},cookie:"Cookie",root_folder_id:"Root folder id"},U={root_folder_path:"Root folder path",num_file:"Num file",num_folder:"Num folder",max_file_size:"Max file size",min_file_size:"Min file size"},D={Thunder:"Thunder","AList V3":"AList V3",PikPak:"PikPak",Aliyundrive:"Aliyundrive",GoogleDrive:"GoogleDrive",Mega_nz:"Mega nz",FTP:"FTP",Virtual:"Virtual",AliyundriveShare:"AliyundriveShare","123Pan":"123Pan",S3:"S3",SMB:"SMB",MediaTrack:"MediaTrack",BaiduNetdisk:"BaiduNetdisk",Lanzou:"Lanzou","AList V2":"AList V2",Quark:"Quark","189CloudPC":"189CloudPC",Local:"Local",YandexDisk:"YandexDisk","139Yun":"139Yun",SFTP:"SFTP",USS:"USS",GooglePhoto:"GooglePhoto",WebDav:"WebDav",Onedrive:"Onedrive",Teambition:"Teambition",ThunderExpert:"ThunderExpert","115 Cloud":"115 Cloud",BaiduPhoto:"BaiduPhoto","189Cloud":"189Cloud"},z={root_folder_path:"Root folder path",client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",order_by:"Order by",order_bys:{name:"Name",path:"Path",created:"Created",modified:"Modified",size:"Size"},order_direction:"Order direction",order_directions:{desc:"Desc",asc:"Asc"}},T={captcha_token:"Captcha token",root_folder_id:"Root folder id",username:"Username",password:"Password"},O={email:"Email",password:"Password"},F={sign_url_expire:"Sign url expire",root_folder_path:"Root folder path",bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",custom_host:"Custom host"},L={root_folder_path:"Root folder path",vendor:"Vendor",vendors:{sharepoint:"Sharepoint",other:"Other"},address:"Address",username:"Username",password:"Password"},M={root_folder_path:"Root folder path",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files"},j={order_by:"Order by",order_bys:{title:"Title",size:"Size",updated_at:"Updated at"},order_desc:"Order desc",access_token:"Access token",project_id:"Project id",root_folder_id:"Root folder id"},B={root_folder_id:"Root folder id",username:"Username",password:"Password"},N={address:"Address",username:"Username",private_key:"Private key",password:"Password",root_folder_path:"Root folder path"},E={client_secret:"Client secret",refresh_token:"Refresh token",region:"Region",regions:{us:"Us",de:"De",global:"Global",cn:"Cn"},is_sharepoint:"Is sharepoint",client_id:"Client id",redirect_uri:"Redirect uri",site_id:"Site id",chunk_size:"Chunk size",root_folder_path:"Root folder path"},V={Aliyundrive:f,"139Yun":{cloud_id:"Cloud id",account:"Account",cookie:"Cookie",root_folder_id:"Root folder id",type:"Type",types:{personal:"Personal",family:"Family"}},BaiduNetdisk:g,"AList V2":{root_folder_path:"Root folder path",url:"Url",password:"Password",access_token:"Access token"},Lanzou:y,"189CloudPC":{rapid_upload:"Rapid upload",username:"Username",password:"Password",validate_code:"Validate code",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filesize:"Filesize",lastOpTime:"LastOpTime",filename:"Filename"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"}},"115 Cloud":{cookie:"Cookie",qrcode_token:"Qrcode token",root_folder_id:"Root folder id"},"AList V3":{root_folder_path:"Root folder path",url:"Url",password:"Password",access_token:"Access token"},AliyundriveShare:k,GoogleDrive:w,S3:b,GooglePhoto:v,SMB:C,ThunderExpert:S,Teambition:P,BaiduPhoto:R,FTP:A,Quark:x,Virtual:U,drivers:D,YandexDisk:z,Thunder:T,"189Cloud":{username:"Username",password:"Password",root_folder_id:"Root folder id"},Mega_nz:O,USS:F,WebDav:L,Local:M,MediaTrack:j,PikPak:B,SFTP:N,"123Pan":{order_bys:{update_at:"Update at",file_name:"File name",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",stream_upload:"Stream upload",username:"Username",password:"Password",order_by:"Order by"},Onedrive:E},I="Refresh",Y="Add",q="Edit",G="Save",W="Update",H="Copied",Q="Deleted successfully",$="Saved successfully",K="Updated successfully",J="Choose",X="Confirm",Z="Cancel",ee="Are you sure you want to delete [{{name}}]?",oe="Operations",te="Yes",se="No",re="Clear",ne="Select folder",ie="Select folder or input path",ae="Disable",de="Enable",ce="OK",le="Back",_e="Have an account?",pe="Go to login",ue="Close",he="Not currently supported",me="Please enter",fe={refresh:I,add:Y,edit:q,delete:"Delete",save:G,update:W,copied:H,delete_success:Q,save_success:$,update_success:K,choose:J,confirm:X,cancel:Z,delete_confirm:ee,operations:oe,yes:te,no:se,clear:re,choose_folder:ne,choose_or_input_path:ie,disable:ae,enable:de,ok:ce,back:le,have_account:_e,go_login:pe,close:ue,no_support_now:he,empty_input:me},ge={name:"Name",size:"Size",modified:"Modified"},ye={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing"},ke="Load more",we="No more",be="Please input password",ve={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings"},Ce={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",only_files_or_one_folder:"Only files or one folder can be dragged at a time.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},Se={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory"},Pe={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},Re={powered_by:"Powered by AList",manage:"Manage"},Ae={obj:ge,preview:ye,load_more:ke,no_more:we,input_password:be,toolbar:ve,upload:Ce,local_settings:Se,package_download:Pe,footer:Re},xe="Login to the",Ue="Remember me",De="Forget password?",ze="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",Te="Clear",Oe="Login",Fe="Browse as a guest",Le="Login successfully",Me={login_to:xe,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:Ue,forget:De,forget_url:ze,clear:Te,login:Oe,use_guest:Fe,success:Le},je={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home"},Be="AList Manage",Ne="You are not admin user, please login with admin account.",Ee="Logout successfully",Ve="Send",Ie="Receive",Ye="Received messages",qe={sidemenu:je,title:Be,not_admin:Ne,logout_success:Ee,send:Ve,receive:Ie,received_msgs:Ye,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},Ge="Path",We="Password",He="Write",Qe="Hide",$e="Readme",Ke="Apply to sub folder",Je="One regular expression per line",Xe="Support markdown content or markdown link",Ze={path:Ge,password:We,write:He,hide:Qe,readme:$e,apply_sub:Ke,hide_help:Je,readme_help:Xe},eo="Home container",oo="Text types",to="Privacy regs",so="Aria2 uri",ro="Audio types",no="Video types",io="Audio cover",ao="Package download",co="Hide files",lo="Iframe previews",_o="Customize head",po="Version",uo="Logo",ho="Main color",mo="Image types",fo="Proxy types",go="Favicon",yo={max_980px:"Max 980px",hope_container:"Hope container"},ko="External previews",wo="Ocr api",bo="Aria2 secret",vo="Pagination type",Co={all:"All",pagination:"Pagination",load_more:"Load more",auto_load_more:"Auto load more"},So="Default page size",Po="Video autoplay",Ro="Link expiration",Ao="Announcement",xo="Home icon",Uo="Audio autoplay",Do="Customize body",zo="Site title",To="Token",Oo={home_container:eo,text_types:oo,privacy_regs:to,aria2_uri:so,audio_types:ro,video_types:no,audio_cover:io,package_download:ao,hide_files:co,iframe_previews:lo,customize_head:_o,version:po,logo:uo,main_color:ho,image_types:mo,proxy_types:fo,favicon:go,home_containers:yo,external_previews:ko,ocr_api:wo,aria2_secret:bo,pagination_type:vo,pagination_types:Co,default_page_size:So,video_autoplay:Po,link_expiration:Ro,announcement:Ao,home_icon:xo,audio_autoplay:Uo,customize_body:Do,site_title:zo,token:To},Fo="Aria2",Lo="Aria2 Version:",Mo="Set aria2",jo="Copy Token",Bo="Reset Token",No="Reset Token Successfully",Eo="Unknown type",Vo={aria2:Fo,aria2_version:Lo,set_aria2:Mo,copy_token:jo,reset_token:Bo,reset_token_success:No,unknown_type:Eo},Io={mount_path:"Mount Path",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"}},Yo={common:Io},qo="Download file to local machine",Go="Transfer downloaded file to corresponding storage",Wo="Upload file to corresponding storage",Ho="Copy file from a storage to another storage",Qo="Completed",$o="Running",Ko="Pending",Jo="Running",Xo="Canceling",Zo="Succeeded",et="Canceled",ot="Errored",tt={down:qo,transfer:Go,upload:Wo,copy:Ho,done:Qo,undone:$o,pending:Ko,running:Jo,canceling:Xo,succeeded:Zo,canceled:et,errored:ot},st={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},rt="Username",nt="Password",it="Base path",at="Role",dt="Permission",ct="Update Profile",lt="Update profile successfully, please re-login.",_t="Change Username",pt="Change Password",ut="Enable 2FA",ht="Scan the QR code to save the secret key",mt="Input the code of your 2FA app",ft="Verify",gt="So you cannot modify anything in the manage page.",yt={permissions:st,username:rt,password:nt,base_path:it,role:at,permission:dt,update_profile:ct,update_profile_success:lt,change_username:_t,change_password:pt,"change_password-tips":"Keep the password empty if you don't want to change it",enable_2fa:ut,"2fa_already_enabled":"2FA is already enabled",scan_qr:ht,input_code:mt,verify:ft,"guest-tips":"You are currently visiting as a guest.",modify_nothing:gt},o=Object.assign({"./br.json":m,"./drivers.json":V,"./global.json":fe,"./home.json":Ae,"./index.json":s,"./login.json":Me,"./manage.json":qe,"./metas.json":Ze,"./settings.json":Oo,"./settings_other.json":Vo,"./storages.json":Yo,"./tasks.json":tt,"./users.json":yt}),kt={};for(const e in o){const t=e.split("/")[1].split(".")[0];kt[t]=o[e]}export{kt as default};
