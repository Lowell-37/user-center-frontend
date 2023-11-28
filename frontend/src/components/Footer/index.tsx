import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'Lowell出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Lowell-Here',
          title: 'Lowell Here',
          href: 'https://mp.weixin.qq.com/s?__biz=Mzg4NDk3MzI1Nw==&mid=2247485248&idx=1&sn=874a95f755f03a4af60bb834c0c4b845&chksm=cfb14ce6f8c6c5f0fd88e2441fca7f43383bd3cddb9576ea7d829131ac75a748a297e11d983e&sessionid=0&scene=126&subscene=0&clicktime=1700902853&enterid=1700902853&ascene=3&fasttmpl_type=0&fasttmpl_fullversion=6957192-zh_CN-zip&fasttmpl_flag=0&realreporttime=1700902853817#rd',
          blankTarget: true,
        },
        {
          key: 'Lowell-Github',
          title: <GithubOutlined />,
          href: 'https://github.com/lowell-37',
          blankTarget: true,
        },
        {
          key: 'Lowell-Juejin',
          title: '掘金',
          href: 'https://juejin.cn/user/1234098377727847',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
