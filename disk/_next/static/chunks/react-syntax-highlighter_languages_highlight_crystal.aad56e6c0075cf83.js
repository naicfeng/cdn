(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7049],{68392:function(e){e.exports=function(e){const n="(_?[ui](8|16|32|64|128))?",i="[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",s="[A-Za-z_]\\w*(::\\w+)*(\\?|!)?",a={$pattern:"[a-zA-Z_]\\w*[!?=]?",keyword:"abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",literal:"false nil true"},t={className:"subst",begin:/#\{/,end:/\}/,keywords:a},c={className:"template-variable",variants:[{begin:"\\{\\{",end:"\\}\\}"},{begin:"\\{%",end:"%\\}"}],keywords:a};function l(e,n){const i=[{begin:e,end:n}];return i[0].contains=i,i}const r={className:"string",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:"%[Qwi]?\\(",end:"\\)",contains:l("\\(","\\)")},{begin:"%[Qwi]?\\[",end:"\\]",contains:l("\\[","\\]")},{begin:"%[Qwi]?\\{",end:/\}/,contains:l(/\{/,/\}/)},{begin:"%[Qwi]?<",end:">",contains:l("<",">")},{begin:"%[Qwi]?\\|",end:"\\|"},{begin:/<<-\w+$/,end:/^\s*\w+$/}],relevance:0},o={className:"string",variants:[{begin:"%q\\(",end:"\\)",contains:l("\\(","\\)")},{begin:"%q\\[",end:"\\]",contains:l("\\[","\\]")},{begin:"%q\\{",end:/\}/,contains:l(/\{/,/\}/)},{begin:"%q<",end:">",contains:l("<",">")},{begin:"%q\\|",end:"\\|"},{begin:/<<-'\w+'$/,end:/^\s*\w+$/}],relevance:0},b={begin:"(?!%\\})("+e.RE_STARTERS_RE+"|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",keywords:"case if select unless until when while",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:"//[a-z]*",relevance:0},{begin:"/(?!\\/)",end:"/[a-z]*"}]}],relevance:0},_=[c,r,o,{className:"regexp",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:"%r\\(",end:"\\)",contains:l("\\(","\\)")},{begin:"%r\\[",end:"\\]",contains:l("\\[","\\]")},{begin:"%r\\{",end:/\}/,contains:l(/\{/,/\}/)},{begin:"%r<",end:">",contains:l("<",">")},{begin:"%r\\|",end:"\\|"}],relevance:0},b,{className:"meta",begin:"@\\[",end:"\\]",contains:[e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"})]},e.HASH_COMMENT_MODE,{className:"class",beginKeywords:"class module struct",end:"$|;",illegal:/=/,contains:[e.HASH_COMMENT_MODE,e.inherit(e.TITLE_MODE,{begin:s}),{begin:"<"}]},{className:"class",beginKeywords:"lib enum union",end:"$|;",illegal:/=/,contains:[e.HASH_COMMENT_MODE,e.inherit(e.TITLE_MODE,{begin:s})]},{beginKeywords:"annotation",end:"$|;",illegal:/=/,contains:[e.HASH_COMMENT_MODE,e.inherit(e.TITLE_MODE,{begin:s})],relevance:2},{className:"function",beginKeywords:"def",end:/\B\b/,contains:[e.inherit(e.TITLE_MODE,{begin:i,endsParent:!0})]},{className:"function",beginKeywords:"fun macro",end:/\B\b/,contains:[e.inherit(e.TITLE_MODE,{begin:i,endsParent:!0})],relevance:2},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":",contains:[r,{begin:i}],relevance:0},{className:"number",variants:[{begin:"\\b0b([01_]+)"+n},{begin:"\\b0o([0-7_]+)"+n},{begin:"\\b0x([A-Fa-f0-9_]+)"+n},{begin:"\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?(_?f(32|64))?(?!_)"},{begin:"\\b([1-9][0-9_]*|0)"+n}],relevance:0}];return t.contains=_,c.contains=_.slice(1),{name:"Crystal",aliases:["cr"],keywords:a,contains:_}}}}]);