<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="https://www.w3.org/1999/XSL/Transform" xmlns:sitemap="https://www.sitemaps.org/schemas/sitemap/0.9/">
	<xsl:output method="html" indent="yes" encoding="UTF-8"/>
	<xsl:template match="/">
	<xsl:variable name="hostname" select="substring-before(substring-after(/sitemap:urlset/sitemap:url[1]/sitemap:loc, '://'), '/')" />
		<html>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="referrer" content="unsafe-url" />
				<title>Sitemap for <xsl:value-of select="$hostname"/></title>
			</head>
			<body>
				<h1>Pages on <xsl:value-of select="$hostname"/></h1>
				<ul>
					<xsl:for-each select="sitemap:urlset/sitemap:url">
					<xsl:variable name="sitemap_loc"><xsl:value-of select="sitemap:loc"/></xsl:variable>
					<xsl:variable name="sitemap_lastmod"><xsl:value-of select="sitemap:lastmod"/></xsl:variable>
					<li>
						<a href="{$sitemap_loc}"><xsl:value-of select="sitemap:loc" /></a>
						<xsl:if test="$sitemap_lastmod!=''">
							(<xsl:value-of select="sitemap:lastmod" />)
						</xsl:if>
					</li>
					</xsl:for-each>
				</ul>
				<p><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> pages</p>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
