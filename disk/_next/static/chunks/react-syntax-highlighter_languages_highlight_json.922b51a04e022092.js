(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9666],{41078:function(n){n.exports=function(n){const e={literal:"true false null"},i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],l=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],a={end:",",endsWithParent:!0,excludeEnd:!0,contains:l,keywords:e},t={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(a,{begin:/:/})].concat(i),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[n.inherit(a)],illegal:"\\S"};return l.push(t,s),i.forEach((function(n){l.push(n)})),{name:"JSON",contains:l,keywords:e,illegal:"\\S"}}}}]);