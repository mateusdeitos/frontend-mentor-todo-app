import { useTheme } from '../../hooks/useTheme'
import { CheckboxContainer } from './styles'

type CheckBoxProps = {
	checked: boolean
	onClick: () => void
}
export const CheckBox = ({ checked, onClick }: CheckBoxProps) => {
	const { theme } = useTheme()
	return (
		<CheckboxContainer $checked={checked} $theme={theme}>
			<span onClick={onClick}>{checked && <img src="/assets/icon-check.svg" />}</span>
		</CheckboxContainer>
	)
}
