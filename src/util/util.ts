import {ElMessage} from "element-plus";

export const jumpTo = (link: String) => {
    window.location.href = link as string
}

export const searchItem = (text: string) => {
    text = text.toLowerCase()
    if (/^\s*$/.test(text)) {
        ElMessage({
            message: '搜索内容不允许为空或者空格。',
            type: 'warning',
        })
    } else {
        jumpTo("/search?q=" + text.trim())
    }
}
